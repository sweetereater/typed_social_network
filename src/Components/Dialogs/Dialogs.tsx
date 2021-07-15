import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';
import { ActionType, DialogsPagePropsType } from '../../redux/stateTypes'

type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    dispatch: (action: ActionType) => void
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
        .filter(msg => { return props.dialogsPage.activeDialog.name === msg.author })
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
            </div>
        </div>
    )
}

export default Dialogs;