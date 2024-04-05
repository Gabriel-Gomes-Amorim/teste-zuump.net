const Sequelize = require("sequelize");
require("dotenv").config();

global.appEnvironment = process.env.NODE_ENV;

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
