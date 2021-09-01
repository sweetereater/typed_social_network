import { DialogsPagePropsType } from '../../redux/stateTypes'
import { addNewMessage, changeActiveDialog, updateNewMessageText } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { storeType } from '../../redux/redux-store';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';



type MapStateToPropsType = {
    dialogsPage: DialogsPagePropsType
}

const mapStateToProps = (state: storeType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const dispatchProps = {
    addNewMessage,
    updateNewMessageText,
    changeActiveDialog

}

const DialogsContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchProps),
)(Dialogs)

export default DialogsContainer;