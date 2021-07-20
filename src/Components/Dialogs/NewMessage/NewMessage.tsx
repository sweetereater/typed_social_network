import { KeyboardEvent } from 'react';
import s from './NewMessage.module.css';
import { ChangeEvent } from 'react';
import { Button } from '@material-ui/core';


type NewMessagePropsType = {
    value: string;
    addNewMessage: () => void
    onNewMessageTextChange: (text: string) => void
}

const NewMessageInput: React.FC<NewMessagePropsType> = (props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onNewMessageTextChange(e.currentTarget.value);
    }

    const handleClick = () => {
        props.addNewMessage();
    }

    const handleKeyInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addNewMessage();
        }
    }

    return (
        <div className={s.newMessage}>
            <input
                value={props.value}
                onChange={handleChange}
                onKeyPress={handleKeyInputKeyPress}
            />
            <Button onClick={handleClick}> &gt; </Button>
        </div>
    )
}

export default NewMessageInput;