const { Sequelize } = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize(config.databaseUrl);

const User = require('./user')(sequelize);
const Product = require('./product')(sequelize);

module.exports = { sequelize, User, Product };
