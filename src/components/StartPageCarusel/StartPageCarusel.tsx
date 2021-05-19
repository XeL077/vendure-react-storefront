import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { CarouselItem } from "./CarouselItem";

export class StartPageCarusel extends React.Component {
    render() {
        return (
            <div>
                 <Carousel
                    interval={1000}
                    showStatus={false}
                    className='style-carousel'
                >
                    <CarouselItem header="header 1" subheader="Подзаголовок" price={'1 000'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                    <CarouselItem header="header 2" subheader="Подзаголовок" price={'1 000'} />
                    <CarouselItem header="header 3" subheader="Подзаголовок" price={'1 000'} />
                </Carousel>
            </div>
        );
    }
}
