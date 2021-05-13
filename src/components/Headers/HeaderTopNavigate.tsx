import './HeaderTopNavigate.css';

const phoneNumber = '+420 336 775 664';
const email = 'info@freshnesecom.com';
function ContactsNavigate () {
    return (
    <nav className="contacts-navigate">
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <a href={`mailto:${email}`}>{email}</a>
    </nav>
    )
}

function TopNavigateLinks () {
    return (
        <nav className="contacts-navigate">
            <a className="navigate_link" target="_blank" href="https://www.instagram.com/panny.anny/#">
                Instagram
            </a>
            <a className="navigate_link" href="about">
                О нас
            </a>
            <a className="navigate_link" href="#">
                Контакты
            </a>
        </nav>
    );
}

export function HeaderTopNavigate () {
    return (
        <div className="header-top-navigate">
            <ContactsNavigate />
            <TopNavigateLinks />
        </div>
    )
}