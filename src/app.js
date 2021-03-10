import React from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import BodyContainer from "./components/BodyContainer.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            displayedGroceries: [],
        };
        this.changeCategory = this.changeCategory.bind(this);
    }

    async changeCategory(category) {
        this.setState({
            displayedGroceries: category.Groceries,
        });
    }

    async componentDidMount() {
        const categories = (await axios.get("/api/categories")).data;
        this.setState({
            categories: categories,
        });
    }

    render() {
        const { categories, displayedGroceries } = this.state;

        return (
            <React.Fragment>
                <Header />
                <BodyContainer
                    categories={categories}
                    displayedGroceries={displayedGroceries}
                    changeCategory={this.changeCategory}
                />
            </React.Fragment>
        );
    }
}

export default App;
