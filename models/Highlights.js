const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Highlights extends Model {}

Highlights.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subchans',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Highlights',
  }
);

module.exports = Highlights;