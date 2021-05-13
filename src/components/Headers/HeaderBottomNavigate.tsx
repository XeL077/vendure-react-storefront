import React from "react";
import "./HeaderBottomNavigate.css";

export class HeaderBottomNavigate extends React.Component {
    render () {
        return (
            <div className="header-bottom-navigate">
                <a href="/" className="logo"></a>
                <div className="header-icons">
                    <a href="/user">user</a>
                    <a href="/cart">cart</a>
                </div>
            </div>
        );
    }
}