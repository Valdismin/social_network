import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./porfile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    postsPropsAll: profileReducer,
    dialogsPropsAll: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

//export let store = createStore(reducers,applyMiddleware(thunk))
// @ts-ignore
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

export type stateType = ReturnType<typeof reducers>