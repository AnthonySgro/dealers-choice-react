// Server initialization
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const apiRouter = require("./routes/api");

// Database
const {
    db,
    seed,
    model: { User, Grocery, Order, Category },
} = require("./db");
seed();

// Logging
app.use(morgan("dev"));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/", async (req, res) => {
    const { itemName, itemPrice, itemCategory, itemImgUrl } = req.body;

    // Find out if we are updating or creating
    const grocery = await Grocery.findOne({
        where: {
            name: itemName,
        },
    });

    // Grabs category from our database
    let category = await Category.findOne({
        where: {
            name: itemCategory,
        },
    });

    // If we are making a new category, we should create it first
    if (!category) {
        category = await Category.create({ name: itemCategory });
    }

    // Updating
    if (grocery) {
        grocery.name = itemName;
        grocery.price = itemPrice;
        grocery.CategoryId = category.id;
        grocery.imgUrl = itemImgUrl;

        await grocery.save();
        res.redirect(204, "/");
    } else {
        const newGrocery = await Grocery.create({
            name: itemName,
            price: itemPrice,
            CategoryId: category.id,
            imgUrl: itemImgUrl,
        });
        res.status(201).sendFile(path.join(__dirname, "../public/index.html"));
    }
});

app.delete("/:id", async (req, res) => {
    await Grocery.destroy({
        where: {
            id: req.params.id,
        },
    });

    res.status(204).sendFile(path.join(__dirname, "../public/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message || "Internal server error");
});

// Dev feedback
app.listen(PORT, () =>
    console.log(`

    Listening on port ${PORT}
    http://localhost:${PORT}/

`),
);
