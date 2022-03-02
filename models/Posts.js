const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    sub_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Subchans',
          key: 'id'
        },
    },
    post_data: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;