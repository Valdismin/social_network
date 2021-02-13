import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./porfile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {setIsFetching, usersReducer} from "./users_reducer";
import {authReducer} from "./auth-reducer";

import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";


let reducers = combineReducers({
    postsPropsAll:profileReducer,
    dialogsPropsAll:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer
})

export let store = createStore(reducers,applyMiddleware(thunk))

export type stateType =  ReturnType<typeof reducers>