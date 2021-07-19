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

const initialState = {
    activeDialog: {
        id: 2,
        name: "Oleg"
    },
    dialogsData: [
        { id: 1, name: "Nadya" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Artem" },
        { id: 4, name: "Elya" },
        { id: 5, name: "Ilya" },
    ],
    messages: [
        { id: 1, authorId: 2, text: "Heyyooo!" },
        { id: 2, authorId: 1, text: "How do you do you?" },
        { id: 3, authorId: 2, text: "Dzzzip Dzaaap" },
        { id: 4, authorId: 5, text: "Piu piu... piu piu piu!" },
        { id: 6, authorId: 1, text: 'Meeeowww ~~' },
        { id: 7, authorId: 3, text: 'wow this beer is so tasty' },
        { id: 8, authorId: 4, text: 'gogogoogog' },
        { id: 9, authorId: 4, text: 'Hello from Canada!' },
    ],
    newMessageText: ""
};


const dialogsReducer = (state: DialogsPagePropsType = initialState, action: ActionTypes): DialogsPagePropsType => {
    // if (action === undefined) return state;
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