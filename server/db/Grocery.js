const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("./db");
const User = require("./User");
const Order = require("./Order");

class Grocery extends Model {}

Grocery.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
        },
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: "Groceries",
    },
);

User.belongsToMany(Grocery, { through: Order });
Grocery.belongsToMany(User, { through: Order });

module.exports = Grocery;
