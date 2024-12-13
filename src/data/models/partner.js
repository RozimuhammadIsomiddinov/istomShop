const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig");
const Product = require("./product");
const moment = require("moment");

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
      get() {
        const rawValue = this.getDataValue("added_time");
        return moment(rawValue).format("YYYY-MM-DD HH:mm:ss");
      },
    },
  },
  {
    timestamps: false,
    tableName: "cart",
  }
);

module.exports = Cart;
