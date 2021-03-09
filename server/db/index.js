const db = require("./db");
const User = require("./User");
const Grocery = require("./Grocery");
const Order = require("./Order");
const Category = require("./Category");
const seed = require("./seed");

module.exports = {
    db,
    seed,
    model: {
        User,
        Grocery,
        Order,
        Category,
    },
};
