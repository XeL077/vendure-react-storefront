import React from "react";
import "./IslandOfLinks.css";

interface IIslandOfLinks {
    children: React.ReactNode | Element;
}
export function IslandOfLinks (props: IIslandOfLinks) {
    return (
        <div className="links-grid-container">
            {props.children}
        </div>
    );
}

interface IPropsLinkItem {
    subheader: string;
    header: string;
    isWide?: boolean;
    halfBanner?: boolean;

    children: React.ReactNode | Element;

}
export function LinkItem (props: IPropsLinkItem) {
    const {
        subheader,
        header,

        isWide,
        halfBanner,

        children
    } = props;

    let classNameResult = "island ";
    if (isWide) {
        classNameResult += "island_wide ";
    }
    if (halfBanner) {
        classNameResult += "island_half";
    }

    return (
        <div className={classNameResult}>
            <div>{subheader}</div>
            <div>{header}</div>
            {children}
        </div>
    );
}
