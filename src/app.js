import React from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import BodyContainer from "./components/BodyContainer.jsx";
import "regenerator-runtime";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            displayedGroceries: [],
            detailScreenStatus: false,
            detailScreenDefault: {},
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.toDetailScreen = this.toDetailScreen.bind(this);
        this.toInventoryScreen = this.toInventoryScreen.bind(this);
        this.deleteGrocery = this.deleteGrocery.bind(this);
        this.updateGrocery = this.updateGrocery.bind(this);
        this.createGrocery = this.createGrocery.bind(this);
        this.groceryInfoGrabber = this.groceryInfoGrabber.bind(this);
        this.displayNewCategory = this.displayNewCategory.bind(this);
    }

    // Renders categories and groceries
    async componentDidMount() {
        try {
            const categories = (await axios.get("/api/categories")).data;
            this.setState({
                displayedGroceries: categories[0].Groceries,
                categories: categories,
                detailScreenStatus: false,
            });
        } catch (err) {
            console.log(err);
        }
    }

    // Changes state to display groceries from selected category
    changeCategory(category) {
        this.toInventoryScreen();
        this.setState({
            displayedGroceries: category.Groceries,
            detailScreenDefault: {},
            detailScreenStatus: false,
        });
    }

    // If user wants to make a new category for item, gives them new input btn
    displayNewCategory() {
        const newCatInp = document.querySelector("#item-new-category");
        const val = document.querySelector("#item-category-select").value;
        if (val === "newCategory") {
            newCatInp.style.visibility = "visible";
        } else {
            newCatInp.style.visibility = "hidden";
        }
    }

    // Prepares state using extended grocery information using prefilled input elements
    async toDetailScreen(grocery) {
        try {
            // If we are in the detail screen, go back to inventory and clear out state
            if (this.state.detailScreenStatus) {
                await this.toInventoryScreen();
            }

            // If we didn't pick a grocery, don't use an object to populate default value
            if (!grocery) {
                this.setState({
                    detailScreenStatus: true,
                    detailScreenDefault: {},
                });

                // Otherwise, we should populate the default values of the inputs
            } else {
                const groceryExtended = (
                    await axios.get(`/api/groceries/${grocery.id}`)
                ).data;

                this.setState({
                    detailScreenStatus: true,
                    detailScreenDefault: groceryExtended,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Returns to the inventory screen
    async toInventoryScreen() {
        const categories = (await axios.get("/api/categories")).data;
        this.setState({
            categories: categories,
            detailScreenStatus: false,
            detailScreenDefault: {},
        });
    }

    // Delete request for deleting
    async deleteGrocery(grocery) {
        await axios.delete(`/${grocery.id}`);
        await this.toInventoryScreen();
    }

    // Gets information prepared for a put or post request
    async groceryInfoGrabber() {
        // Get basic information
        const name = document.querySelector("#item-name").value;
        const price = document.querySelector("#item-price").value;
        let categoryName = document.querySelector("#item-category-select")
            .value;
        const imgUrl = document.querySelector("#itemImgUrl").value;

        // If creating new category, change categoryName
        const newCategoryElement = document.querySelector("#item-new-category");
        if (newCategoryElement.value) {
            categoryName = newCategoryElement.value;
        }

        // If user selected "New Category" but didn't fill in a value
        if (categoryName === "newCategory") {
            const grocery = this.state.detailScreenDefault;
            const groceryExtended = (
                await axios.get(`/api/groceries/${grocery.id}`)
            ).data;
            categoryName = groceryExtended.Category.name;
        }

        // Return our request body
        const returnObj = {
            itemName: name,
            itemPrice: price,
            itemCategory: categoryName,
            itemImgUrl: imgUrl,
        };

        return returnObj;
    }

    // Put request for updating
    async updateGrocery(e) {
        try {
            console.log("updating");
            // Prevent the form from submitting
            e.preventDefault();

            // Get grocery item we are updating
            const grocery = this.state.detailScreenDefault;

            if (!grocery) {
                console.log("A glitch occurred");
                return;
            }

            // Get request body and update grocery
            const groceryInfo = await this.groceryInfoGrabber();

            // Go back to inventory screen
            await this.toInventoryScreen();

            await axios.put(`/${grocery.id}`, groceryInfo);
        } catch (err) {
            console.log(err);
        }
    }

    // Post request for creating
    async createGrocery(e) {
        try {
            console.log("creating");
            // Prevent the form from submitting
            e.preventDefault();

            // Get request body and create new grocery
            const groceryInfo = await this.groceryInfoGrabber();

            // Go back to inventory screen
            await this.toInventoryScreen();

            await axios.post(`/`, groceryInfo);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const {
            categories,
            displayedGroceries,
            detailScreenStatus,
            detailScreenDefault,
        } = this.state;

        return (
            <React.Fragment>
                <Header />
                <BodyContainer
                    categories={categories}
                    displayedGroceries={displayedGroceries}
                    changeCategory={this.changeCategory}
                    toDetailScreen={this.toDetailScreen}
                    toInventoryScreen={this.toInventoryScreen}
                    detailScreenStatus={detailScreenStatus}
                    detailScreenDefault={detailScreenDefault}
                    deleteGrocery={this.deleteGrocery}
                    updateGrocery={this.updateGrocery}
                    createGrocery={this.createGrocery}
                    displayNewCategory={this.displayNewCategory}
                />
            </React.Fragment>
        );
    }
}

export default App;
