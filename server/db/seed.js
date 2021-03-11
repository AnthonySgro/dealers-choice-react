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
                "Cheddar",
                5.99,
                dairy.id,
                "https://images-na.ssl-images-amazon.com/images/I/51ZW%2BvNYdrL.jpg",
            ],
            [
                "Mozzarella",
                5.99,
                dairy.id,
                "https://jpg.breadberry.com/content/images/thumbs/0088653_mehadrin-shredded-mozzarella-cheese-8-oz.jpeg",
            ],
            [
                "Sour Cream",
                4.99,
                dairy.id,
                "https://www.kroger.com/product/images/large/front/0004990018275",
            ],
            [
                "Butter",
                3.69,
                dairy.id,
                "https://www.kroger.com/product/images/large/front/0003450015192",
            ],
            [
                "Cottage Cheese",
                5.69,
                dairy.id,
                "https://www.kroger.com/product/images/large/front/0004990034504",
            ],
            [
                "Cream Cheese",
                5.29,
                dairy.id,
                "https://www.kroger.com/product/images/large/front/0002100000730",
            ],
            [
                "Bread",
                3.79,
                bakery.id,
                "https://www.cookingclassy.com/wp-content/uploads/2020/04/bread-recipe-1-500x500.jpg",
            ],
            [
                "Croissants",
                8.39,
                bakery.id,
                "https://images-na.ssl-images-amazon.com/images/I/51CKM4yGBVL.jpg",
            ],
            [
                "Bagels",
                8.39,
                bakery.id,
                "https://i5.walmartimages.com/asr/56f1e3c3-a31d-4577-9b3c-fb16aa4615a9_1.5963a5d2ba6a66a7bc769c7fe51d659e.jpeg",
            ],
            [
                "Pita Bread",
                5.89,
                bakery.id,
                "https://i5.walmartimages.com/asr/5951f593-d4b8-40fb-a994-4c6a5935519a_1.02679f046a231122c06b280706a511fe.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
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
                "Cheez-Its",
                3.99,
                snacks.id,
                "https://www.kroger.com/product/images/large/front/0002410010685",
            ],
            [
                "Pringles",
                3.99,
                snacks.id,
                "https://smartloadusa.com/wp-content/uploads/18520-1.jpg",
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
            [
                "Carrots",
                1.99,
                produce.id,
                "https://www.gettystewart.com/wp-content/uploads/2014/08/carrots-wet-board-sq.jpg",
            ],
            [
                "Lettuce",
                2.29,
                produce.id,
                "https://jpg.seasonskosher.com/content/images/thumbs/0111509_poppys-lettuce-iceburg-1-ct.jpeg",
            ],
            [
                "Spinach",
                3.59,
                produce.id,
                "https://i5.walmartimages.com/asr/cd092ad2-9bc9-4d62-b1f5-ca76a9f4f588_1.a7ab12b5281092f3175e48c62ba022d1.jpeg",
            ],
            [
                "Potatos",
                2.79,
                produce.id,
                "https://jpg.seasonskosher.com/content/images/thumbs/0103596_green-giant-yukon-gold-bag.jpeg",
            ],
            [
                "Parsley",
                1.39,
                produce.id,
                "https://jpg.seasonskosher.com/content/images/thumbs/0089759_parsley-italian.jpeg",
            ],
            [
                "Garlic",
                0.99,
                produce.id,
                "https://images-na.ssl-images-amazon.com/images/I/51VXOkSZkJL.jpg",
            ],
            [
                "Onion",
                1.99,
                produce.id,
                "https://images-na.ssl-images-amazon.com/images/I/41JjNC93GML.jpg",
            ],
            [
                "Tomatoes",
                2.99,
                produce.id,
                "https://jpg.breadberry.com/content/images/thumbs/0126469_sunripe-grape-tomatoes-10-oz.jpeg",
            ],
            [
                "Avocados",
                5.99,
                produce.id,
                "https://jpg.seasonskosher.com/content/images/thumbs/0112491_pooppy-hass-avocados-bag.jpeg",
            ],
            [
                "Salmon",
                10.99,
                seafood.id,
                "https://images-na.ssl-images-amazon.com/images/I/41fCRhKiN1L.jpg",
            ],
            [
                "Fresh Tuna",
                9.99,
                seafood.id,
                "https://jpg.seasonskosher.com/content/images/thumbs/0131220_wild-caught-tuna-steak.jpeg",
            ],
            [
                "Prepared Sushi",
                13.99,
                seafood.id,
                "https://jpg.seasonskosher.com/content/images/thumbs/0090936_veggie-roll.jpeg",
            ],
            [
                "Shrimp",
                15.99,
                seafood.id,
                "https://www.culinaryhill.com/wp-content/uploads/2020/06/How-to-Clean-Shrimp-Culinary-Hill-LR-07SQ-500x500.jpg",
            ],
            [
                "Sam Adams",
                14.99,
                wineBeerSpirits.id,
                "https://www.kroger.com/product/images/large/front/0008769230050",
            ],
            [
                "Budweiser",
                11.99,
                wineBeerSpirits.id,
                "https://www.kroger.com/product/images/large/front/0001820000834",
            ],
            [
                "Cortijo Rioja",
                17.99,
                wineBeerSpirits.id,
                "https://scontent.harristeeter.com/legacy/productimagesroot/DJ/9/763739.jpg",
            ],
            [
                "Absolut Vodka",
                28.99,
                wineBeerSpirits.id,
                "https://www.kroger.com/product/images/large/front/0083522900060",
            ],
            [
                "Patron Silver",
                35.99,
                wineBeerSpirits.id,
                "https://www.kroger.com/product/images/large/front/0072173300151",
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
