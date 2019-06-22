const Sequelize = require('sequelize');
const db = require('../config/database');

const Cliente = db.define('cliente', {
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Cliente;