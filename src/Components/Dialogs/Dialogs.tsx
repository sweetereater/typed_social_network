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

    const {
        dialogsPage,
        changeActiveDialog,
        addNewMessage,
        updateNewMessageText
    } = props;

    const dialogsView = dialogsPage.dialogsData.map(dialog => {

        return <UserDialog
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            changeActiveDialog={changeActiveDialog}
        />
    });

    const messagesView = dialogsPage.messages
        .filter(msg => { return dialogsPage.activeDialog.id === msg.authorId })
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
                    value={dialogsPage.newMessageText}
                    addNewMessage={addNewMessage}
                    onNewMessageTextChange={updateNewMessageText}
                />
            </div>
        </div>
    )
}

export default Dialogs;