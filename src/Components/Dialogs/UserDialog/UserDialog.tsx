// import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ActionTypes } from '../../../redux/stateTypes';
import s from './UserDialog.module.css';
import { changeActiveDialogAC } from '../../../redux/dialogsPageReducer';

type UserDialogType = {
    id: number
    name: string
    dispatch: (action: ActionTypes) => void
}

const UserDialog: React.FC<UserDialogType> = (props) => {

    const handleClick = () => {
        props.dispatch(changeActiveDialogAC(props.id));
    }

    const path = `/messages/${props.id}`;

    return (
        <div className={s.userDialog} onClick={handleClick}>
            <NavLink activeClassName={s.activeDialog} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default UserDialog;