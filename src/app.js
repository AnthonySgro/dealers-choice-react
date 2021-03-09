import React from "react";
import axios from "axios";
import Header from "./components/Header.jsx";

class App extends React.Component {
    async componentDidMount() {
        const categories = (await axios.get("/api/categories")).data;
        console.log(categories);
    }

    render() {
        return <Header />;
    }
}

export default App;
