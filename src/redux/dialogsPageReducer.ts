import {
    ActionTypes,
    DialogsPagePropsType,
    ChangeActiveDialogT,
    UpdateNewMessageTextT,
    AddNewMessageT
} from './stateTypes'

import {
    CHANGE_ACTIVE_DIALOG,
    UPDATE_NEW_MESSAGE_TEXT,
    ADD_NEW_MESSAGE
} from './stateTypes';

const dialogsReducer = (action: ActionTypes, state: DialogsPagePropsType): DialogsPagePropsType => {
    switch (action.type) {
        case CHANGE_ACTIVE_DIALOG:

            const newActiveAuthor = state.dialogsData.find(dialog => dialog.id === action.authorId);
            state.activeDialog = newActiveAuthor ? newActiveAuthor : { id: 1, name: "Nadya" };
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;

        case ADD_NEW_MESSAGE:
            const newMsg = {
                id: state.messages.length + 1,
                authorId: state.activeDialog.id,
                text: state.newMessageText,
            }
            state.messages = [...state.messages, newMsg];
            state.newMessageText = "";

            return state;
        default:
            return state;
    }
}


export const changeActiveDialogAC = (id: number): ChangeActiveDialogT => {
    return {
        type: CHANGE_ACTIVE_DIALOG,
        authorId: id
    }
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageTextT => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export const addNewMessageAC = (): AddNewMessageT => {
    return {
        type: ADD_NEW_MESSAGE,
    }
}

export default dialogsReducer;