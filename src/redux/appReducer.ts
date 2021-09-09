// import { Dispatch } from "react";
import { getAuthorizationStatus } from "./authReducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'

const initialState = {
    initialized: false
}

type appStateType = {
    initialized: boolean
}

const appReducer = (state: appStateType = initialState, action: any): appStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
}

export const setInitializedStatus = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const getInitialized = () => (dispatch: any) => {
    dispatch(getAuthorizationStatus()).then(() => {
        dispatch(setInitializedStatus())
    })
}


export default appReducer;