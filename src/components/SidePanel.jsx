import React, { Component } from "react";

class SidePanel extends Component {
    render() {
        const { categories, changeCategory } = this.props;

        return (
            <aside id="side-panel">
                <h3>Departments</h3>
                <ul id="side-panel-list">
                    {categories.map((category) => (
                        <li className="category-list-item" key={category.id}>
                            <a
                                href="#"
                                onClick={() => changeCategory(category)}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        );
    }
}

export default SidePanel;