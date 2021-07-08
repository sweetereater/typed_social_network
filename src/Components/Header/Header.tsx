import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://mitsoftware.com/wp-content/uploads/2020/07/react-1.png"
                alt="Logo"
                className={s.header__img}
            />
        </header>
    )
}

export default Header;