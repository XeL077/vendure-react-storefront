import * as React from 'react';
import "./InfiniteCarousel.css";
import classNames from "classnames";

interface IInfiniteCarousel {
    children: React.ReactNode;
    className?: string;
    widthSlide: number;
    onChangeSlide?: (index: number) => void;
}

interface IState {
    cursor: number;
    jump: boolean;
}
export class InfiniteCarousel extends React.Component<IInfiniteCarousel, IState> {
    _ref: React.RefObject<HTMLDivElement> = React.createRef();
    get ref() {
        return this._ref.current!;
    }
    state = {
        cursor: 0,
        jump: false,
    };
    animating = false;

    componentDidMount() {
        if (this.ref) {
            this.ref.addEventListener("transitionend", this.onTransitionEnd);
        }
    }

    componentWillUnmount() {
        if (this.ref) {
            this.ref.removeEventListener("transitioned", this.onTransitionEnd);
        }
    }

    componentDidUpdate(prevProps: Readonly<IInfiniteCarousel>, prevState: Readonly<IState>) {
        const { cursor, jump } = this.state;
        const { cursor: oldCursor } = prevState;

        if (cursor !== oldCursor) {
            this.animating = true;
        }

        if (jump) {
            setTimeout(() => {
                this.animating = false;
                this.setState({
                    jump: false
                });
            }, 1);
        }
    }

    onTransitionEnd = () => {
        const { cursor } = this.state;
        const { children } = this.props;
        const count = React.Children.count(children);

        this.animating = false;

        if (cursor >= count) {
            this.setState({
                jump: true,
                cursor: 0
            });

            this.onChangeSlide(1);
            return;
        }

        if (cursor <= -1) {
            this.setState({
                jump: true,
                cursor: count - 1
            });

            this.onChangeSlide(count);

            return;
        }

        this.onChangeSlide(cursor + 1);
    };

    changeCursor = (amount: number) => {
        const { cursor } = this.state;

        if (this.animating) {
            return;
        }

        this.setState({
            cursor: cursor + amount,
        });
    };

    onChangeSlide = (index: number) => {
        if (this.props.onChangeSlide) {
            this.props.onChangeSlide(index);
        }
    }

    public prev() {
        this.changeCursor(-1);
    }
    public next() {
        this.changeCursor(1);
    }

    renderChildren() {
        // утраиваем потомков чтобы создать бесшовный слайдер
        return (
            <>
                {this.props.children}
                {this.props.children}
                {this.props.children}
            </>
        );
    }

    render() {
        const { cursor, jump } = this.state;
        const { children, className, widthSlide } = this.props;
        const count = React.Children.count(children);

        const style = {
            transform: `translateX(-${(count + cursor) * widthSlide}px)`,
            transition: !jump ? 'transform 200ms ease-in' : 'none',
        };

        const resultClassWrapper = classNames(
            className,
            'overflow-hidden'
        );
        const classSlidersLine = classNames(
            'class-sliders-line'
        );
        return (
            <div className={resultClassWrapper}>
                <div className={classSlidersLine} style={style} ref={this._ref}>
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

interface IInfiniteCarouselCounter {
    currentIndex: number;
    dataLength: number;
    className: string;
}
export function InfiniteCarouselCounter({ currentIndex, dataLength, className }: IInfiniteCarouselCounter) {
    return (
        <div className={className}>
            {currentIndex}/{dataLength}
        </div>
    );
}
