const Sequelize = require('sequelize')
const dvConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

module.exports = connection