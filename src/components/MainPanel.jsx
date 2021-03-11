import React, { Component } from "react";

class MainPanel extends Component {
    render() {
        const {
            displayedGroceries,
            detailScreenStatus,
            toDetailScreen,
            toInventoryScreen,
            categories,
            detailScreenDefault,
            deleteGrocery,
            updateGrocery,
            createGrocery,
        } = this.props;

        return (
            // If we are not modifying data, show the groceries
            <div id="main-view">
                {!detailScreenStatus ? (
                    displayedGroceries.map((grocery) => (
                        <div
                            className="main-view-item"
                            key={grocery.id}
                            onClick={() => toDetailScreen(grocery)}
                        >
                            <img
                                src={grocery.imgUrl}
                                alt={`Picture of ${grocery.name}`}
                            />
                            <div className="main-view-item-info">
                                <p>{grocery.name}</p>
                                <p>{`$${grocery.price}`}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    // This is the screen that lets us modify data
                    <div id="item-detail-view">
                        {detailScreenDefault.name ? (
                            <h3>Modify Item</h3>
                        ) : (
                            <h3>Add New Item</h3>
                        )}
                        <form
                            onSubmit={
                                detailScreenDefault.name
                                    ? () => updateGrocery(event)
                                    : () => createGrocery(event)
                            }
                        >
                            <div
                                className="item-detail-item"
                                id="item-name-group"
                            >
                                <label htmlFor="itemName">Item Name:</label>
                                <input
                                    type="text"
                                    name="itemName"
                                    id="item-name"
                                    defaultValue={
                                        detailScreenDefault.name
                                            ? detailScreenDefault.name
                                            : ""
                                    }
                                />
                            </div>
                            <div
                                className="item-detail-item"
                                id="item-price-group"
                            >
                                <label htmlFor="itemPrice">Price:</label>
                                <input
                                    type="text"
                                    name="itemPrice"
                                    id="item-price"
                                    defaultValue={
                                        detailScreenDefault.price
                                            ? detailScreenDefault.price
                                            : ""
                                    }
                                />
                            </div>
                            <div
                                className="item-detail-item"
                                id="item-category-group"
                            >
                                <label htmlFor="itemCategory">
                                    Department:
                                </label>
                                <select
                                    name="itemCategory"
                                    id="item-category-select"
                                    defaultValue={
                                        detailScreenDefault.Category
                                            ? detailScreenDefault.Category.name
                                            : ""
                                    }
                                >
                                    {categories.map((category) => (
                                        <option
                                            value={category.name}
                                            key={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className="item-detail-item"
                                id="item-imgurl-group"
                            >
                                <label htmlFor="itemImgUrl">Image URL:</label>
                                <input
                                    type="text"
                                    name="itemImgUrl"
                                    defaultValue={
                                        detailScreenDefault.imgUrl
                                            ? detailScreenDefault.imgUrl
                                            : ""
                                    }
                                />
                            </div>
                            <div className="item-detail-item" id="item-submit">
                                <button>Submit Changes</button>
                            </div>
                        </form>
                        {detailScreenDefault.name ? (
                            <div className="item-detail-item" id="delete">
                                <button
                                    onClick={() =>
                                        deleteGrocery(detailScreenDefault)
                                    }
                                >
                                    Delete Item from Inventory
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="item-detail-item" id="go-back">
                            <button onClick={() => toInventoryScreen()}>
                                Back
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default MainPanel;
