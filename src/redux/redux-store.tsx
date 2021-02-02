import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./porfile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {setIsFetching, usersReducer} from "./users_reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    postsPropsAll:profileReducer,
    dialogsPropsAll:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export type stateType =  ReturnType<typeof reducers>