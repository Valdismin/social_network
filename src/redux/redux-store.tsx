import {combineReducers, createStore} from "redux";
import {profileReducer} from "./porfile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducer} from "./users_reducer";


let reducers = combineReducers({
    postsPropsAll:profileReducer,
    dialogsPropsAll:dialogsReducer,
    usersPage:usersReducer
})

export let store = createStore(reducers)