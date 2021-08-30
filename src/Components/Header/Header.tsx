import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://mitsoftware.com/wp-content/uploads/2020/07/react-1.png"
                alt="Logo"
                className={s.header__img}
            />
            <div className={s.login}>
                {
                    props.isAuth ? props.login : <NavLink to='/login'> Login </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;