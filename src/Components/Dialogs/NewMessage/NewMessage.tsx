import { KeyboardEvent } from 'react';
import s from './NewMessage.module.css';
import { ChangeEvent } from 'react';
import { CaretRightFilled } from '@ant-design/icons';


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
                className={s.newMessageInput}
                value={props.value}
                onChange={handleChange}
                onKeyPress={handleKeyInputKeyPress}
            />
            <button className={s.newMessageSendButton} onClick={handleClick} > <CaretRightFilled /> </button>
        </div>
    )
}

export default NewMessageInput;