const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("./db");

class UserGrocery extends Model {}

UserGrocery.init(
    {
        UserId: {
            type: DataTypes.INTEGER,
            unique: false,
        },
        GroceryId: {
            type: DataTypes.INTEGER,
            unique: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            unique: false,
        },
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: "UserGrocery",
    },
);

module.exports = UserGrocery;
