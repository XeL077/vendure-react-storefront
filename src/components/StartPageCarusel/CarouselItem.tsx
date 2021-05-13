import React from "react";

export class CarouselItem extends React.Component {
    render () {
        return (
            <div className="carousel-item">
                <div className="carousel-item__left">
                    <div className="carousel-item__image-bg">
                        <img alt="test" />
                    </div>
                </div>
                <div className="carousel-item__right">
                    <h1>Заголовок</h1>
                    <h2>Подзаголовок</h2>
                    <span>1 000.99 ₽</span>
                    <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>

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