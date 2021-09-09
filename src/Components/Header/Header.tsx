import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean,
    login: string,
    logoutUser: () => void
}

const Header = (props: HeaderPropsType) => {

    const {
        isAuth,
        login,
        logoutUser
    } = props;

    return (
        <header className={s.header}>
            <NavLink to='/'>
                <img
                    src="https://mitsoftware.com/wp-content/uploads/2020/07/react-1.png"
                    alt="Logo"
                    className={s.header__img}
                />
            </NavLink>
            <div className={s.login}>
                {
                    isAuth ? login : <NavLink to='/login'> Sign in </NavLink>
                }
                {isAuth && <button className={s.logoutButton} onClick={logoutUser}>Exit</button>}

            </div>
        </header>
    )
}

export default Header;