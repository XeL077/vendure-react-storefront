import React from "react";
import { HeaderBottomNavigate } from "./HeaderBottomNavigate";
import { HeaderTopNavigate } from "./HeaderTopNavigate";

export class Headers extends React.Component {
    render() {
        return(
            <div>
                <HeaderTopNavigate />
                <HeaderBottomNavigate />
            </div>
        );
    }
}