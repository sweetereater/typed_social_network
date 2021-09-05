import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dialogsReducer from "./dialogsPageReducer";
import myPostsReducer from "./myPostsReducer";
import usersReducer from "./usersPageReducer";
import profileReducer from "./profilePageReducer";
import authReducer from './authReducer';
import appReducer from "./appReducer";



let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    myPosts: myPostsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;

export type storeType = ReturnType<typeof rootReducer>

export default store;