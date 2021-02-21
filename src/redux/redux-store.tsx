import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./porfile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    postsPropsAll:profileReducer,
    dialogsPropsAll:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})

export let store = createStore(reducers,applyMiddleware(thunk))

export type stateType =  ReturnType<typeof reducers>