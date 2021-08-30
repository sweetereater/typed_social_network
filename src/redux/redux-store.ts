import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from './authReducer';



let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    userProfilePage: userProfileReducer,
    auth: authReducer
});

let store = createStore(rootReducer);

//@ts-ignore
window.store = store;

export type storeType = ReturnType<typeof rootReducer>

export default store;