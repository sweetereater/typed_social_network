import { ChangeEvent } from "react"

export type dialogType = {
    id: number,
    name: string
}

export type messageType = {
    id: number
    author: string
    text: string
}

export type postType = {
    id: number,
    text: string,
    likesCount: number,
    imgSrc: string
}

export type dialogsPagePropsType = {
    activeDialog: dialogType
    dialogsData: Array<dialogType>
    messages: Array<messageType>
}
export type profilePagePropsType = {
    posts: Array<postType>
    newPostText: string
}

export type stateType = {
    profilePage: profilePagePropsType
    dialogsPage: dialogsPagePropsType
}

type AppStatePropsType = {
    state: stateType
    addPost: (text: string) => void
    onPostTextChange: (text: string) => void
    changeActiveDialog: (text: string) => void
}

export default AppStatePropsType;