import React, { Component } from "react";
import SidePanel from "./SidePanel.jsx";
import MainPanel from "./MainPanel.jsx";

class BodyContainer extends Component {
    render() {
        const { categories, changeCategory } = this.props;

        return (
            <div id="main-body">
                <SidePanel
                    categories={categories}
                    changeCategory={changeCategory}
                />
                <MainPanel />
            </div>
        );
    }
}

export default BodyContainer;
