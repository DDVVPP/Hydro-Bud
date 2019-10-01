const Sequelize = require('sequelize');
const db = require('../db');

const UserBody = db.define('userBody', {
  height: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cupsRecc: {
    type: Sequelize.INTEGER,
  },
  cupsRem: {
    type: Sequelize.INTEGER,
  },
});
