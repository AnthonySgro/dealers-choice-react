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
    }

    changeCategory(category) {
        this.toInventoryScreen();
        this.setState({
            displayedGroceries: category.Groceries,
            detailScreenDefault: {},
            detailScreenStatus: false,
        });
    }

    async toDetailScreen(grocery) {
        try {
            if (!grocery) {
                this.setState({
                    detailScreenStatus: true,
                    detailScreenDefault: {},
                });
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

    async toInventoryScreen() {
        const categories = (await axios.get("/api/categories")).data;
        this.setState({
            categories: categories,
            detailScreenStatus: false,
            detailScreenDefault: {},
        });
    }

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

    async deleteGrocery(grocery) {
        await axios.delete(`/${grocery.id}`);
        await this.toInventoryScreen();
    }

    async updateGrocery(e) {
        e.preventDefault();
        console.log("update");
    }

    async createGrocery(e) {
        e.preventDefault();
        console.log("create");
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
                />
            </React.Fragment>
        );
    }
}

export default App;
