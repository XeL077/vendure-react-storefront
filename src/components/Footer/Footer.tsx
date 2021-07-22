import * as React from "react";
import "./Footer.css";

export function Footer () {
    return (
        <div className="footer">
            <nav className="footer-wrapper">
                <a className="footer-link" href="/about">О нас</a>
                <a className="footer-link" href="/contact">Контакты</a>
                <a className="footer-link" href="/help">Помощь</a>
                <a className="footer-link" href="/payments">Оплата и доставка</a>
            </nav>
        </div>
    );
}
