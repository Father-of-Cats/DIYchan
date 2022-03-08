const Sequelize = require('sequelize');
require('dotenv').config();




const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: '172.16.32.55',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
module.exports = sequelize;