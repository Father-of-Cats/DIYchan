const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Usersettings extends Model {}

Usersettings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    darkmode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usersettings',
  }
);

module.exports = Usersettings;