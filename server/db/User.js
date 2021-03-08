const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("./db");

class User extends Model {}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: "Users",
    },
);

module.exports = User;
