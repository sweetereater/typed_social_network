
type MessageType = {
    text: string
}

const Message = (props: MessageType) => {
    return <div className="message">{props.text}</div>
}

export default Message;