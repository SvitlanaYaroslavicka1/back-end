const Sequelize = require('sequelize');
 
const db = new Sequelize('moviedb', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;