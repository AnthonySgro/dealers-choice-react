import React, { Component } from "react";

class MainPanel extends Component {
    render() {
        return (
            <div id="main-view">
                <div className="main-view-item">
                    <img
                        src="https://homesteadingfamily.com/wp-content/uploads/2020/01/foodiesfeed.com_fresh-eggs-in-a-grocery-store-500x500.jpg"
                        alt=""
                    />
                    <div className="main-view-item-info">
                        <p>Eggs</p>
                        <p>$2.99</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPanel;
