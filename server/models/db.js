// MySQL
const Sequelize = require('sequelize');
require('dotenv').config();
// console.log(process.env);
// global.appEnvironment = 'development'; // Enable this for localhost
// global.appEnvironment = process.env.NODE_ENV || 'development';
global.appEnvironment = process.env.NODE_ENV;

// DB connection (MySQL)
// gQB36gRAgVcY4aYw@
// let pass = appEnvironment === 'production' ? '123456' : '';
let pass = process.env.DB_PASSWORD;

const sequelize = new Sequelize('rodeiodigital', 'mysql', pass, {
    host: 'localhost',
    dialect: 'mysql'
    // query: {raw: true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}