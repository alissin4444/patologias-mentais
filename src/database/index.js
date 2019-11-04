const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const PatologiaMental = require("../models/PatologiaMental");

const connection = new Sequelize(dbConfig);

PatologiaMental.init(connection);

module.exports = connection;