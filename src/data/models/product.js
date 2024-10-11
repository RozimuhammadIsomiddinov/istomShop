const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    cost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Categories",
        key: "id",
      },
      allowNull: false,
    },
    isdiscount: {
      type: DataTypes.BOOLEAN,
    },
    newcost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true, // Yangi narx, agar chegirma mavjud bo'lsa
      validate: {
        isLessThanCost(value) {
          if (this.isdiscount && (!value || value >= this.cost)) {
            throw new Error("Yangi narx asl narxdan kichik bo'lishi kerak.");
          }
        },
      },
    },
  },
  {
    timestamps: true,
    createdAt: "createdat",
    updatedAt: "updatedat",
    tableName: "products",
  }
);

// Before creating or updating, verify discount and adjust newcost
Product.beforeSave((product) => {
  if (product.isdiscount && !product.newcost) {
    throw new Error("Chegirma mavjud, lekin yangi narx belgilanmagan.");
  }
});

module.exports = Product;
