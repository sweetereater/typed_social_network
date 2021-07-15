import { ChangeEvent } from "react"

export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number
    author: string
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

type TypeForAction = "ADD-POST" | "UPDATE-NEW-POST-TEXT" | "CHANGE-ACTIVE-DIALOG"


export type ActionType = {
    type: TypeForAction
    text: string
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
    addPost: (postMessage: string) => void
    onPostTextChange: (text: string) => void
    changeActiveDialog: (author: string) => void
}

type AppStatePropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export default AppStatePropsType;