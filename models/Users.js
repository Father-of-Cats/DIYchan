const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pass_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usertypes',
        key: 'id'
      },
    },
    Subs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datecreated: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = Users;