const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig");

const User = sequelize.define("user", {
  id: {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
