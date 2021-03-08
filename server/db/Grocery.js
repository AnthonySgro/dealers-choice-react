const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("./db");
const User = require("./User");
const UserGrocery = require("./UserGrocery");
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

User.belongsToMany(Grocery, { through: UserGrocery });
Grocery.belongsToMany(User, { through: UserGrocery });

module.exports = Grocery;
