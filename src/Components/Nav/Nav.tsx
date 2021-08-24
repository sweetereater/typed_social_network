import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={s.nav_item} to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink className={s.nav_item} to="/messages" activeClassName={s.active}>Messages</NavLink>
            <NavLink className={s.nav_item} to="/users" activeClassName={s.active}>Users</NavLink>
            <NavLink className={s.nav_item} to="/music" activeClassName={s.active}>Music</NavLink>
        </nav>
    )
}

export default Nav;