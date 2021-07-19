export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number
    authorId: number
    text: string
}

export type PostType = {
    id: number,
    text: string,
    likesCount: number,
    imgSrc: string
}

export type DialogsPagePropsType = {
    activeDialog: DialogType
    dialogsData: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string;
}
export type ProfilePagePropsType = {
    posts: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}

// Actions and Action Creators 

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const CHANGE_ACTIVE_DIALOG = "CHANGE-ACTIVE-DIALOG";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
export const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export type AddPostT = {
    type: typeof ADD_POST
    text: string
}

export type UpdateNewPostTextT = {
    type: typeof UPDATE_NEW_POST_TEXT
    text: string
}

export type ChangeActiveDialogT = {
    type: typeof CHANGE_ACTIVE_DIALOG
    authorId: number
}

export type UpdateNewMessageTextT = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newMessageText: string
}

export type AddNewMessageT = {
    type: typeof ADD_NEW_MESSAGE
}

export type ActionTypes = AddPostT |
    UpdateNewPostTextT |
    ChangeActiveDialogT |
    UpdateNewMessageTextT |
    AddNewMessageT


export type StoreType = {
    _state: StateType,
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionTypes) => void
}

type AppStatePropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}

export default AppStatePropsType;