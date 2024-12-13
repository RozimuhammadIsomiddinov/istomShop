const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig");

const Consult = sequelize.define(
  "consult",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    question: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "consult",
    timestamps: true,
  }
);

module.exports = Consult;
