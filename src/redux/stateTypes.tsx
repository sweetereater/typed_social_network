import { ChangeEvent } from "react"

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
}
export type ProfilePagePropsType = {
    posts: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}

export type AddPostT = {
    type: "ADD-POST"
    text: string
}

export type UpdateNewPostTextT = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}

export type ChangeActiveDialogT = {
    type: "CHANGE-ACTIVE-DIALOG"
    authorId: number
}

export type ActionTypes = AddPostT | UpdateNewPostTextT | ChangeActiveDialogT

export type StoreType = {
    _state: StateType,
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionTypes) => void
    _addPost: (postMessage: string) => void
    _onPostTextChange: (text: string) => void
    _changeActiveDialog: (authorId: number) => void
}

type AppStatePropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}

export default AppStatePropsType;