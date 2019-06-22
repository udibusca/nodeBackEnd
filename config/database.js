const Sequelize = require('sequelize');
module.exports =  new Sequelize('pds2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 20,
    min: 5,
    acquire: 30000,
    idle: 10000
  },
});