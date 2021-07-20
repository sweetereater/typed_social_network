import { DialogsPagePropsType } from '../../redux/stateTypes'
import { addNewMessageAC, changeActiveDialogAC, updateNewMessageTextAC } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { storeType } from '../../redux/redux-store';
import { Dispatch } from 'redux';


type MapStateToPropsType = {
    dialogsPage: DialogsPagePropsType
}

const mapStateToProps = (state: storeType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type MapDispatchToPropsType = {
    addNewMessage: () => void
    onNewMessageTextChange: (text: string) => void
    changeActiveDialog: (id: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: (): void => {
            dispatch(addNewMessageAC())
        },
        onNewMessageTextChange: (text: string): void => {
            dispatch(updateNewMessageTextAC(text));
        },
        changeActiveDialog: (id: number): void => {
            dispatch(changeActiveDialogAC(id));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;