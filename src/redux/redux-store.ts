import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";
import usersReducer from "./usersPageReducer";
import userProfileReducer from "./userProfileReducer";



let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    userProfilePage: userProfileReducer
});

let store = createStore(rootReducer);


export type storeType = ReturnType<typeof rootReducer>

export default store;