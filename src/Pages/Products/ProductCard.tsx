import * as React from "react";
import { NavLink } from 'react-router-dom';
import {SearchResult} from "../../generated/schemas";
interface IProps {
    item: SearchResult;
}

export function ProductCard(props: IProps) {
    const {item} = props;
    return (
        <div className="product-card">
            <NavLink to={`/product/${item.slug}`} className="image-wrapper">
                <img width={200} className="product-image" src={item.productAsset?.preview} />
            </NavLink>
            <NavLink to={`/product/${item.slug}`} className="image-wrapper">
                {item.productName}
            </NavLink>
        </div>
    );
}
