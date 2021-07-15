// import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ActionType } from '../../../redux/stateTypes';
import s from './UserDialog.module.css'

type UserDialogType = {
    id: number
    name: string
    dispatch: (action: ActionType) => void
}

const UserDialog: React.FC<UserDialogType> = (props) => {

    const handleClick = () => {
        props.dispatch({ type: "CHANGE-ACTIVE-DIALOG", text: props.name });
    }

    const path = `/messages/${props.id}`;

    return (
        <div className={s.userDialog} onClick={handleClick}>
            <NavLink activeClassName={s.activeDialog} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default UserDialog;