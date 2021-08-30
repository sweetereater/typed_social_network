const CHANGE_FOLLOW_STATUS = "UserPage/CHANGE_FOLLOW_STATUS";
const LOAD_USERS = "UserPage/LOAD-USERS";
const CHANGE_ACTIVE_PAGE = "UserPage/CHANGE-ACTIVE-PAGE";
const CHANGE_LAST_PAGE = "UserPage/CHANGE-LAST-PAGE";
const SET_FETCHING = "UserPage/SET_FETCHING";

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
    isFetching: boolean
}

type ToggleFollowActionType = {
    type: typeof CHANGE_FOLLOW_STATUS
    id: number
    status: boolean
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

type SetFetchingActionType = {
    type: typeof SET_FETCHING
    status: boolean
}


type userReducerActionType = ToggleFollowActionType | LoadUsersActionType | ChangeActivePageActionType | ChangeLastPageActionType | SetFetchingActionType

export const initialState = {
    users: [],
    activePage: 1,
    lastPage: 4,
    isFetching: false
}

const usersReducer = (state: UserPagePropsType = initialState, action: userReducerActionType) => {
    switch (action.type) {
        case LOAD_USERS:
            return { ...state, users: [...action.users] }
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map(user => user.id === action.id ? { ...user, followed: action.status } : user),
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
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }

        default:
            return state;
    }
}

export const loadUsers = (users: Array<UserType>) => {
    return {
        type: LOAD_USERS,
        users: users
    }
}

export const changeFollowStatus = (userID: number, status: boolean) => {
    return {
        type: CHANGE_FOLLOW_STATUS,
        id: userID,
        status
    }
}

export const changeActivePage = (page: number) => {
    return {
        type: CHANGE_ACTIVE_PAGE,
        page: page
    }
}

export const changeLastPage = (page: number) => {
    return {
        type: CHANGE_LAST_PAGE,
        page: page
    }
}

export const setFetchingStatus = (status: boolean) => {
    return {
        type: SET_FETCHING,
        status
    }
}

export default usersReducer;