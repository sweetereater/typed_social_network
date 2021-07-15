import s from './Message.module.css';

type MessageType = {
    text: string
}

const Message = (props: MessageType) => {
    return <div className={s.messageContainer}>
        <span className={s.message}>{props.text}</span>
    </div>
}

export default Message;