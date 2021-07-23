const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const LOAD_USERS = "LOAD-USERS";
const CHANGE_ACTIVE_PAGE = "CHANGE-ACTIVE-PAGE"
const CHANGE_LAST_PAGE = "CHANGE-LAST-PAGE"

export type UserType = {
    name: string
    id: number
    followed: boolean
    status: undefined
    uniqueUrlName: undefined
    photos: {
        small: string | undefined
        large: string | undefined
    }
}


export type UserPagePropsType = {
    users: Array<UserType>
    activePage: number
    lastPage: number
}

type ToggleFollowActionType = {
    type: typeof TOGGLE_FOLLOW
    id: number
}
type LoadUsersActionType = {
    type: typeof LOAD_USERS
    users: Array<UserType>
}
type ChangeActivePageActionType = {
    type: typeof CHANGE_ACTIVE_PAGE
    page: number
}
type ChangeLastPageActionType = {
    type: typeof CHANGE_LAST_PAGE
    page: number
}


type userReducerActionType = ToggleFollowActionType | LoadUsersActionType | ChangeActivePageActionType | ChangeLastPageActionType

const initialState = {
    users: [],
    activePage: 1,
    lastPage: 21
}

const usersReducer = (state: UserPagePropsType = initialState, action: userReducerActionType) => {
    switch (action.type) {
        case LOAD_USERS:
            return { ...state, users: [...action.users] }
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.id ? { ...user, followed: !user.followed } : user),
            }
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.page
            }
        case CHANGE_LAST_PAGE:
            return {
                ...state,
                lastPage: action.page
            }

        default:
            return state;
    }
}

export const loadUsersAC = (users: Array<UserType>) => {
    return {
        type: LOAD_USERS,
        users: users
    }
}

export const toggleFollowAC = (userID: number) => {
    return {
        type: TOGGLE_FOLLOW,
        id: userID
    }
}

export const changeActivePageAC = (page: number) => {
    return {
        type: CHANGE_ACTIVE_PAGE,
        page: page
    }
}

export const changeLastPageAC = (page: number) => {
    return {
        type: CHANGE_LAST_PAGE,
        page: page
    }
}

export default usersReducer;