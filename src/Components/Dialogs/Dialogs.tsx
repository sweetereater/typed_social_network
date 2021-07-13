import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';
import { dialogType, messageType } from '../../redux/stateTypes'

type dialogsPagePropsType = {
    dialogsData: Array<dialogType>
    messages: Array<messageType>
}


const Dialogs = (props: dialogsPagePropsType) => {

    const dialogsView = props.dialogsData.map(dialog => {
        return <UserDialog key={dialog.id} id={dialog.id} name={dialog.name} />
    });

    const messagesView = props.messages.map(msg => {
        return <Message key={msg.id} text={msg.text} />
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsView}
            </div>
            <div className={s.messages}>
                {messagesView}
            </div>
        </div>
    )
}

export default Dialogs;