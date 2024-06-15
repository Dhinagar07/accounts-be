// db.js
const dbConfig = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Account = require("./account")(sequelize, Sequelize);

db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("Database connected");
});

module.exports = db;
