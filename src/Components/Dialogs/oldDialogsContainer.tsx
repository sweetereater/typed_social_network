import { ActionTypes, DialogsPagePropsType } from '../../redux/stateTypes'
import { addNewMessageAC, changeActiveDialogAC, updateNewMessageTextAC } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
    dialogsPage: DialogsPagePropsType
    dispatch: (action: ActionTypes) => void
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const changeActiveDialog = (id: number) => {
        props.dispatch(changeActiveDialogAC(id))
    }

    const addNewMessage = () => {
        props.dispatch(addNewMessageAC())
    }

    const newMessageTextChange = (text: string) => {
        props.dispatch(updateNewMessageTextAC(text));
    }

    return (
        <Dialogs
            dialogsPage={props.dialogsPage}
            changeActiveDialog={changeActiveDialog}
            addNewMessage={addNewMessage}
            onNewMessageTextChange={newMessageTextChange}
        />

    )
}

export default DialogsContainer;