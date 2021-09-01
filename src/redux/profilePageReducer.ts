import { Dispatch } from "redux";
import { usersAPI } from '../API/api';
import { profileAPI } from '../API/api';

const SET_FETCHING_STATUS = "userProfilePage/SET_FETCHING_STATUS"
const LOAD_USER_PROFILE_INFO = "userProfilePage/LOAD_USER_PROFILE_INFO"
const SET_USER_STATUS = "userProfilePage/SET_USER_STATUS";

export type ProfileType = {
    aboutMe: string
    fullName: string
    photos: {
        small: string
        large: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: number
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
        userId: 0
    },

    status: ''
}

export type UserProfileStateType = typeof initialState;



type SetFetchingStatusAction = {
    type: typeof SET_FETCHING_STATUS
    payload: boolean
}

type LoadUserProfileInfo = {
    type: typeof LOAD_USER_PROFILE_INFO
    payload: ProfileType
}

type SetUserStatus = {
    type: typeof SET_USER_STATUS
    text: string
}


type UserProfileReducerActionTypes = SetFetchingStatusAction | LoadUserProfileInfo | SetUserStatus


const profileReducer = (state: UserProfileStateType = initialState, action: UserProfileReducerActionTypes): UserProfileStateType => {
    switch (action.type) {
        case SET_FETCHING_STATUS:
            return { ...state, isFetching: action.payload };
        case LOAD_USER_PROFILE_INFO:
            return { ...state, profile: action.payload }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.text
            }
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

export const loadUserProfileInfo = (profile: ProfileType) => {
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


export const setProfileStatus = (text: string) => {
    return {
        type: SET_USER_STATUS,
        text
    }
}


export const getProfileStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setProfileStatus(data.data));
    });
}

export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        dispatch(setProfileStatus(status));
    })
}



export default profileReducer;