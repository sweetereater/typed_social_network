import s from './NewMessage.module.css';
import { ChangeEvent } from 'react';
import { Button, Input } from '@material-ui/core';
import { ActionTypes } from '../../../redux/stateTypes';
import { addNewMessageAC, updateNewMessageTextAC } from '../../../redux/state'


type NewMessagePropsType = {
    value: string;
    dispatch: (action: ActionTypes) => void
}

const NewMessageInput: React.FC<NewMessagePropsType> = (props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        props.dispatch(updateNewMessageTextAC(e.currentTarget.value));
    }

    const handleClick = () => {
        props.dispatch(addNewMessageAC())
    }

    return (
        <div className={s.newMessage}>
            <input
                value={props.value}
                onChange={handleChange}
            />
            <Button onClick={handleClick}> &gt; </Button>
        </div>
    )
}

export default NewMessageInput;