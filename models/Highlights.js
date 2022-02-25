const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Highlights extends Model {}

Highlights.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'highlights',
  }
);

module.exports = Highlights;