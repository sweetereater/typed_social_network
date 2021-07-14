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

export type StoreType = {
    _state: StateType,
    getState: () => StateType
    addPost: (postMessage: string) => void
    onPostTextChange: (text: string) => void
    changeActiveDialog: (author: string) => void
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
}

type AppStatePropsType = {
    state: StateType
    addPost: (text: string) => void
    onPostTextChange: (text: string) => void
    changeActiveDialog: (text: string) => void
}

export default AppStatePropsType;