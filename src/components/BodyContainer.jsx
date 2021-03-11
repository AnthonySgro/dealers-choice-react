import React, { Component } from "react";
import SidePanel from "./SidePanel.jsx";
import MainPanel from "./MainPanel.jsx";

class BodyContainer extends Component {
    render() {
        const {
            categories,
            displayedGroceries,
            changeCategory,
            toDetailScreen,
            toInventoryScreen,
            detailScreenStatus,
            detailScreenDefault,
            deleteGrocery,
            updateGrocery,
            createGrocery,
            displayNewCategory,
        } = this.props;

        return (
            <div id="main-body">
                <SidePanel
                    categories={categories}
                    changeCategory={changeCategory}
                    toDetailScreen={toDetailScreen}
                />
                <MainPanel
                    displayedGroceries={displayedGroceries}
                    toDetailScreen={toDetailScreen}
                    toInventoryScreen={toInventoryScreen}
                    detailScreenStatus={detailScreenStatus}
                    categories={categories}
                    detailScreenDefault={detailScreenDefault}
                    deleteGrocery={deleteGrocery}
                    updateGrocery={updateGrocery}
                    createGrocery={createGrocery}
                    displayNewCategory={displayNewCategory}
                />
            </div>
        );
    }
}

export default BodyContainer;
