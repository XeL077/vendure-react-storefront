import React from "react";
import "./StartPageCarusel.css";
import { InfiniteCarousel } from "../InfiniteCarousel/InfiniteCarousel";
import { CarouselItem } from "./CarouselItem";

export class StartPageCarusel extends React.Component {
    render() {
        return (
            <div>
                <InfiniteCarousel widthSlide={1000}>
                    <CarouselItem />
                </InfiniteCarousel>
            </div>
        );
    }
}
