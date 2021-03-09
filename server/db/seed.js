const db = require("./db");
const User = require("./User");
const Grocery = require("./Grocery");
const UserGrocery = require("./Order");
const Category = require("./Category");

const seed = async () => {
    try {
        await db.sync({ force: true });
        console.log("Database connected!");

        // Categories
        const dairy = await Category.create({ name: "Dairy" });
        const bakery = await Category.create({ name: "Bakery" });
        const butcher = await Category.create({ name: "Butcher" });
        const snacks = await Category.create({ name: "Snacks" });
        const produce = await Category.create({ name: "Produce" });
        const seafood = await Category.create({ name: "Seafood" });
        const wineBeerSpirits = await Category.create({
            name: "Wine, Beer, & Spirits",
        });

        const USERS = [
            "hunter2",
            "cheesyboi85",
            "MarieAntoinette",
            "HungryHungryHippo6",
        ];

        const GROCERIES = [
            [
                "Eggs",
                2.99,
                dairy.id,
                "https://homesteadingfamily.com/wp-content/uploads/2020/01/foodiesfeed.com_fresh-eggs-in-a-grocery-store-500x500.jpg",
            ],
            [
                "Bread",
                3.79,
                bakery.id,
                "https://www.cookingclassy.com/wp-content/uploads/2020/04/bread-recipe-1-500x500.jpg",
            ],
            [
                "Chicken",
                4.99,
                butcher.id,
                "https://www.foodiecrush.com/wp-content/uploads/2016/07/Rotisserie-Chicken-foodiecrush.com-014-1-500x500.jpg",
            ],
            [
                "Milk",
                3.99,
                dairy.id,
                "https://groceryheart.com/wp-content/uploads/2020/05/jpg-13738.jpeg",
            ],
            [
                "Doritos",
                3.99,
                snacks.id,
                "https://www.kroger.com/product/images/large/front/0002840064132",
            ],
            [
                "Flank Steak",
                8.99,
                butcher.id,
                "https://www.kroger.com/product/images/large/front/0020158100000",
            ],
            [
                "Filet Mignon",
                14.99,
                butcher.id,
                "https://jpg.kosherfamily.com/content/images/thumbs/0040949_filet-mingon.jpeg",
            ],
        ];

        const ORDERS = [
            [1, 1, 1],
            [1, 2, 2],
            [1, 3, 1],
            [1, 6, 1],
            [2, 1, 2],
            [2, 2, 1],
            [2, 3, 1],
            [2, 5, 1],
            [2, 6, 1],
            [2, 7, 3],
            [3, 1, 1],
            [3, 6, 1],
            [4, 2, 5],
            [4, 5, 7],
        ];

        await Promise.all(
            USERS.map((user) => {
                User.create({ username: user }).catch((err) => {
                    console.log(err);
                });
            }),
        );

        await Promise.all(
            GROCERIES.map((grocery) => {
                Grocery.create({
                    name: grocery[0],
                    price: grocery[1],
                    CategoryId: grocery[2],
                    imgUrl: grocery[3],
                }).catch((err) => {
                    console.log(err);
                });
            }),
        );

        await Promise.all(
            ORDERS.map((item) => {
                UserGrocery.create({
                    UserId: item[0],
                    GroceryId: item[1],
                    amount: item[2],
                }).catch((err) => {
                    console.log(err);
                });
            }),
        );
    } catch (err) {
        console.log(err);
    }
};

module.exports = seed;
