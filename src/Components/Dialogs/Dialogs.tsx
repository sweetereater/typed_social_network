import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';
import { DialogsPagePropsType } from '../../redux/stateTypes'
import NewMessageInput from './NewMessage/NewMessage';

type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    changeActiveDialog: (id: number) => void
    addNewMessage: () => void
    updateNewMessageText: (text: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsView = props.dialogsPage.dialogsData.map(dialog => {

        return <UserDialog
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            changeActiveDialog={props.changeActiveDialog}
        />
    });

    const messagesView = props.dialogsPage.messages
        .filter(msg => { return props.dialogsPage.activeDialog.id === msg.authorId })
        .map(msg => {
            return <Message key={msg.id} text={msg.text} />
        });

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogsView}
            </div>
            <div className={s.messagesContainer}>
                <div className={s.messages}>
                    {messagesView}
                </div>
                <NewMessageInput
                    value={props.dialogsPage.newMessageText}
                    addNewMessage={props.addNewMessage}
                    onNewMessageTextChange={props.updateNewMessageText}
                />
            </div>
        </div>
    )
}

export default Dialogs;