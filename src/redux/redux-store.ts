import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

let store = createStore(rootReducer);


export type storeType = ReturnType<typeof rootReducer>

export default store;