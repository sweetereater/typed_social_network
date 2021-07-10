type dialogType = {
    id: number,
    name: string
}

type messageType = {
    id: number,
    text: string
}

type postType = {
    id: number,
    text: string,
    likesCount: number,
    imgSrc: string
}

type dialogsPagePropsType = {
    dialogsData: Array<dialogType>
    messages: Array<messageType>
}

type stateType = {
    profilePage: {
        postsData: Array<postType>
    }
    dialogsPage: dialogsPagePropsType
}

type AppStateType = {
    state: stateType
}

export default AppStateType;