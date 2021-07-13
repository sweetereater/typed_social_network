import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Button
                    variant="outlined"
                ><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></Button>
            </div>
            <div className={s.item}>
                <Button
                    variant="outlined"
                ><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></Button>
            </div>
            <div className={s.item}>
                <Button
                    variant="outlined"
                ><NavLink to="/news" activeClassName={s.active}>News</NavLink></Button>
            </div>
            <div className={s.item}>
                <Button
                    variant="outlined"
                ><NavLink to="/music" activeClassName={s.active}>Music</NavLink></Button>
            </div>
        </nav>
    )
}

export default Nav;