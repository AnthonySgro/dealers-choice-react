const { Sequelize } = require("sequelize");
const db = new Sequelize(
    process.env.DATABASE || "postgres://localhost/dealers_choice_react",
    { logging: false },
);

module.exports = db;
