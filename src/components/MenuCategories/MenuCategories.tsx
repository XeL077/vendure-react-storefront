import React from "react";

export class MenuCategories extends React.Component {
    render () {
        return (
            <menu>
                <a href={`/products`}>Блузы</a>
                <a href={`/products`}>Брюки</a>
            </menu>
        );
    }
}