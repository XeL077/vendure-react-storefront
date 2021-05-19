import React from "react";
import "./StartPageCaruselItem.css";

interface IProps {
    header: string;
    subheader: string;
    price: string;
    description?: string;
}
export class CarouselItem extends React.Component<IProps> {
    render () {
        const {header, subheader, price, description} = this.props;
        return (
            <div className="carousel-item">
                <div className="carousel-item__left">
                    <div className="carousel-item__image-bg">
                        <img alt="test" />
                    </div>
                </div>
                <div className="carousel-item__right">
                    <h1>{header}</h1>
                    <h2>{subheader}</h2>
                    <span>{price} ₽</span>
                    <div>{description}</div>

                    <div className="carousel-item__right-bottom">
                        <div>Добавить в корзину</div>
                        <div>
                        Жакард 100% Хлопок
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}