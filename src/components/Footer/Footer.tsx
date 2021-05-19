import "./Footer.css";

export function Footer () {
    return (
        <div className="footer">
            <nav>
                <a href="/about">О нас</a>
                <a href="/help">Помощь</a>
                <a href="/contact">Контакты</a>
            </nav>

            <span>Социальные сети</span>
            <nav>
                <a href="https://www.instagram.com/panny.anny/">instagram</a>
                <a href="https://vk.com/">vk</a>
            </nav>
        </div>
    );
}
