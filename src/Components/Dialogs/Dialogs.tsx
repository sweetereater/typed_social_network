import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';


type dialogType = {
    id: number,
    name: string
}

type messageType = {
    id: number,
    text: string
}

type dialogsPagePropsType = {
    dialogsData: Array<dialogType>
    messages: Array<messageType>
}


const Dialogs = (props: dialogsPagePropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(dialog => {
                    return <UserDialog key={dialog.id} id={dialog.id} name={dialog.name} />
                })}
            </div>
            <div className={s.messages}>
                {props.messages.map(msg => {
                    return <Message key={msg.id} text={msg.text} />
                })}
            </div>
        </div>
    )
}

export default Dialogs;