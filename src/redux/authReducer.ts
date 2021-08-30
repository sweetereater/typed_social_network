const SET_USER_DATA = 'authorization/SET_USER_DATA';
const SET_FETCHING_STATUS = 'authorization/SET_FETCHING_STATUS';
const SET_AUTH_STATUS = 'authorization/SET_AUTH_STATUS'

export type UserData = {
    userId: number | null
    email: string
    login: string
}

type AutorizationType = UserData & {
    isFetching: boolean
    isAuth: boolean
}

const initialState: AutorizationType = {
    userId: null,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false
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


type ActionsType = SetFetchingActionType | SetUserDataActionType | SetAuthorizationStatus

const authReducer = (state: AutorizationType = initialState, action: ActionsType): AutorizationType => {
    switch (action.type) {
        case SET_FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.status
            }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_AUTH_STATUS:
            return {
                ...state,
                isAuth: action.authStatus
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


export default authReducer;