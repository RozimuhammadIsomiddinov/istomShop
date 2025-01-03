const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig");
const Product = require("./product");

const Cart = sequelize.define(
  "cart",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    added_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "cart",
  }
);

module.exports = Cart;
