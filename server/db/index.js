const db = require("./db");
const User = require("./User");
const Grocery = require("./Grocery");
const UserGrocery = require("./UserGrocery");
const seed = require("./seed");

module.exports = {
    db,
    seed,
    model: {
        User,
        Grocery,
        UserGrocery,
    },
};
