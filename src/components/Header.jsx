import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header id="header">
                <ul id="header-items">
                    <li id="logo" className="header-item">
                        <a href="/">Patti's Groceries</a>
                    </li>
                    <li className="header-item">
                        <a href="">Inventory</a>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
