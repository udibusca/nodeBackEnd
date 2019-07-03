const Sequelize = require('sequelize');
const db = require('../config/database');

const Categoria = db.define('categoria', {
  idCategoria: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Categoria;