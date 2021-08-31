import { Dispatch } from "redux";
import { usersAPI } from "../API/api";

const SET_FETCHING_STATUS = "userProfilePage/SET_FETCHING_STATUS"
const LOAD_USER_PROFILE_INFO = "userProfilePage/LOAD_USER_PROFILE_INFO"

export type UserProfileType = {
    aboutMe: string
    fullName: string
    photos: {
        small: string
        large: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
}

const initialState = {
    isFetching: false,
    profile: {
        aboutMe: "",
        fullName: "",
        photos: {
            small: "",
            large: "",
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
    }
}

export type UserProfileStateType = typeof initialState;



type SetFetchingStatusAction = {
    type: typeof SET_FETCHING_STATUS
    payload: boolean
}

type LoadUserProfileInfo = {
    type: typeof LOAD_USER_PROFILE_INFO
    payload: UserProfileType
}


type UserProfileReducerActionTypes = SetFetchingStatusAction | LoadUserProfileInfo


const userProfileReducer = (state: UserProfileStateType = initialState, action: UserProfileReducerActionTypes): UserProfileStateType => {
    switch (action.type) {
        case SET_FETCHING_STATUS:
            return { ...state, isFetching: action.payload };
        case LOAD_USER_PROFILE_INFO:
            return { ...state, profile: action.payload }
        default:
            return state;
    }
}


export const setFetchingStatus = (status: boolean) => {
    return {
        type: SET_FETCHING_STATUS,
        payload: status
    } as const;
}

export const loadUserProfileInfo = (profile: UserProfileType) => {
    return {
        type: LOAD_USER_PROFILE_INFO,
        payload: profile
    }
}

// thunks

export const loadUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setFetchingStatus(true))
    usersAPI.getUser(userId).then(response => {
        dispatch(setFetchingStatus(false))
        dispatch(loadUserProfileInfo(response.data))
    })
}




export default userProfileReducer;