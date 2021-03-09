const express = require("express");
const router = express.Router();
const {
    model: { User, Grocery, Order, Category },
} = require("../db");

router.get("/categories", async (req, res, next) => {
    try {
        const categories = await Category.findAll({
            include: Grocery,
        });
        res.send(categories);
    } catch (err) {
        console.log(err);
    }
});

router.get("/groceries", async (req, res, next) => {
    try {
        const groceries = await Grocery.findAll({
            include: Category,
        });
        res.send(groceries);
    } catch (err) {
        console.log(err);
    }
});

router.get("/users", async (req, res, next) => {
    try {
        const users = await User.findAll({
            include: Grocery,
        });
        res.send(users);
    } catch (err) {
        console.log(err);
    }
});

router.get("/orders", async (req, res, next) => {
    try {
        const orders = await Order.findAll({});
        res.send(orders);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
