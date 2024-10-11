const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    //name for products
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: "categories",
  }
);

module.exports = Category;
