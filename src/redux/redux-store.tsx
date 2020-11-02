import {combineReducers, createStore} from "redux";
import {profileReducer} from "./porfile_reducer";
import {dialogsReducer} from "./dialogs_reducer";


let reducers = combineReducers({
    postsPropsAll:profileReducer,
    dialogsPropsAll:dialogsReducer
})

export let store = createStore(reducers)