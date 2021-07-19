import s from './UserDialog.module.css';
import { NavLink } from 'react-router-dom';

type UserDialogType = {
    id: number
    name: string
    changeActiveDialog: (id: number) => void
}

const UserDialog: React.FC<UserDialogType> = (props) => {

    const handleClick = () => {
        props.changeActiveDialog(props.id);
    }

    const path = `/messages/${props.id}`;

    return (
        <div className={s.userDialog} onClick={handleClick}>
            <NavLink activeClassName={s.activeDialog} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default UserDialog;