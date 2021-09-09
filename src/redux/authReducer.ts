import { Dispatch } from "redux";
import { authAPI } from "../API/api";

const SET_USER_DATA = 'authorization/SET_USER_DATA';
const SET_FETCHING_STATUS = 'authorization/SET_FETCHING_STATUS';
const SET_AUTH_STATUS = 'authorization/SET_AUTH_STATUS'
const SET_AUTH_ERROR = 'authorization/SET_AUTH_ERROR'

export type UserData = {
    id: number | null
    email: string
    login: string
}

type AutorizationType = UserData & {
    isFetching: boolean
    isAuth: boolean
    authError: string
}

const initialState: AutorizationType = {
    id: null,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false,
    authError: '',
}

type SetFetchingActionType = {
    type: typeof SET_FETCHING_STATUS
    status: boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: UserData
}

type SetAuthorizationStatus = {
    type: typeof SET_AUTH_STATUS
    authStatus: boolean
}

type SetAuthErrorType = {
    type: typeof SET_AUTH_ERROR
    authError: string
}


type ActionsType = SetFetchingActionType | SetUserDataActionType | SetAuthorizationStatus | SetAuthErrorType

const authReducer = (state: AutorizationType = initialState, action: ActionsType): AutorizationType => {
    switch (action.type) {
        case SET_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.status
            }
        case SET_USER_DATA:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload
            }
        case SET_AUTH_STATUS:
            return {
                ...state,
                isAuth: action.authStatus
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.authError
            }
        default:
            return state;
    }
}


export const setFetchingStatus = (status: boolean): SetFetchingActionType => {
    return {
        type: SET_FETCHING_STATUS,
        status
    } as const;
}


export const setUserData = (data: UserData): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: data
    } as const;
}

export const setAuthStatus = (authStatus: boolean): SetAuthorizationStatus => {
    return {
        type: SET_AUTH_STATUS,
        authStatus
    }
}

export const setAuthError = (authError: string) => {
    return {
        type: SET_AUTH_ERROR,
        authError
    }
}

export const getAuthorizationStatus = () => (dispatch: Dispatch) => {
    return authAPI.isAuthorized().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data))
            dispatch(setAuthStatus(true))
        } else {
            dispatch(setAuthStatus(false))
        }
    })
}

export const loginUser = (email: string, password: string) => (dispatch: any) => {
    dispatch(setFetchingStatus(true));
    authAPI.logIn(email, password).then(data => {
        if (data.resultCode === 0) {
            dispatch(setFetchingStatus(false));
            dispatch(getAuthorizationStatus())
        } else {
            dispatch(setAuthError(data.messages[0]))
        }

    })
}

export const logoutUser = () => (dispatch: any) => {
    authAPI.logOut().then(res => {
        dispatch(getAuthorizationStatus())
    })
}


export default authReducer;