import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import s from './UserDialog.module.css'

type UserDialogType = {
    id: number
    name: string
    changeActiveDialog: (text: string) => void
}

const UserDialog: React.FC<UserDialogType> = (props) => {

    const handleClick = () => {
        props.changeActiveDialog(props.name);
    }

    const path = `/messages/${props.id}`;

    return (
        <div className={s.userDialog}>
            <Button onClick={handleClick}>
                <NavLink activeClassName={s.activeDialog} to={path}>{props.name}</NavLink>
            </Button>
        </div>
    )
}

export default UserDialog;