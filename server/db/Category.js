const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("./db");
const Grocery = require("./Grocery");

class Category extends Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: "Categories",
    },
);

Grocery.belongsTo(Category);
Category.hasMany(Grocery);

module.exports = Category;
