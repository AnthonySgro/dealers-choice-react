import React, { Component } from "react";
import ReactDom from "react-dom";
import DefaultHeader from "./components/defaultHeader.jsx";
import PrimaryBody from "./components/primaryBody.jsx";
import axios from "axios";

class Main extends Component {
    constructor() {
        super();
        this.state = {};
    }

    async componentDidMount() {
        const categories = (await axios.get("/api/categories")).data;
        console.log(categories);
    }

    render() {
        return <div>hello</div>;
    }
}

export default Main;

ReactDom.render(Main, document.getElementById("app"));
