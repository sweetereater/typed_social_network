import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';
import { ActionTypes, DialogsPagePropsType } from '../../redux/stateTypes'
import NewMessageInput from './NewMessage/NewMessage';

type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    dispatch: (action: ActionTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsView = props.dialogsPage.dialogsData.map(dialog => {
        return <UserDialog
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            dispatch={props.dispatch}
        />
    });

    const messagesView = props.dialogsPage.messages
        .filter(msg => { return props.dialogsPage.activeDialog.id === msg.authorId })
        .map(msg => {
            return <Message key={msg.id} text={msg.text} />
        });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsView}
            </div>
            <div className={s.messages}>
                {messagesView}
                <NewMessageInput
                    value={props.dialogsPage.newMessageText}
                    dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Dialogs;