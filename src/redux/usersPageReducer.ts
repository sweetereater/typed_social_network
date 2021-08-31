import { Dispatch } from "redux";
import { usersAPI } from "../API/api";
import { storeType } from "./redux-store";

const CHANGE_FOLLOW_STATUS = "usersPage/CHANGE_FOLLOW_STATUS";
const LOAD_USERS = "usersPage/LOAD-USERS";
const CHANGE_ACTIVE_PAGE = "usersPage/CHANGE-ACTIVE-PAGE";
const CHANGE_LAST_PAGE = "usersPage/CHANGE-LAST-PAGE";
const SET_FETCHING = "usersPage/SET_FETCHING";
const TOGGLE_FOLLOW = "usersPage/TOGGLE_FOLLOW"


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
    followProgress: Array<number>
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

type ToggleFollow = {
    type: typeof TOGGLE_FOLLOW
    status: boolean
    id: number
}


type userReducerActionType =
    ToggleFollowActionType |
    LoadUsersActionType |
    ChangeActivePageActionType |
    ChangeLastPageActionType |
    SetFetchingActionType |
    ToggleFollow

export const initialState = {
    users: [],
    activePage: 1,
    lastPage: 4,
    isFetching: false,
    followProgress: []
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
        case TOGGLE_FOLLOW:
            return {
                ...state,
                followProgress: state.followProgress.includes(action.id) ?
                    state.followProgress.filter(id => id !== action.id) :
                    [...state.followProgress, action.id]
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

export const toggleFollow = (id: number) => {
    return {
        type: TOGGLE_FOLLOW,
        id,

    }
}

// thunks 

export const loadUsersTC = (page: number) => (dispatch: Dispatch, getState: () => storeType): void => {

    const usersPage = getState().usersPage;

    dispatch(setFetchingStatus(true));

    usersAPI.getUsers(page).then(data => {

        dispatch(setFetchingStatus(false));

        dispatch(loadUsers(data.items));
        if (data.totalCount !== usersPage.lastPage) {
            dispatch(changeLastPage(data.totalCount))
        }
    })
}

export const followUser = (id: number, followStatus: boolean) => (dispatch: Dispatch) => {

    const request = followStatus ? "followUser" : "unFollowUser"
    dispatch(toggleFollow(id))

    usersAPI[request](id)
        .then(response => {
            dispatch(toggleFollow(id))
            if (response.data.resultCode === 0) {
                dispatch(changeFollowStatus(id, followStatus))
            }
        })
}





export default usersReducer;