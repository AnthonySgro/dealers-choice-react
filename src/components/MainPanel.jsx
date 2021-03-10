import React, { Component } from "react";

class MainPanel extends Component {
    render() {
        const { displayedGroceries } = this.props;
        return (
            <div id="main-view">
                {displayedGroceries.map((grocery) => (
                    <div className="main-view-item" key={grocery.id}>
                        <img
                            src={grocery.imgUrl}
                            alt={`Picture of ${grocery.name}`}
                        />
                        <div className="main-view-item-info">
                            <p>{grocery.name}</p>
                            <p>{`$${grocery.price}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MainPanel;
