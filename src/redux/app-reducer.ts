import {ThunkAction} from "redux-thunk";
import {getAuthUserData, getAuthUserDataType} from "./auth-reducer";



const SET_INITIALIZED = "SET_INITIALIZED"


type ActionsType = setInitializedSuccessType

type setInitializedSuccessType = {
    type: "SET_INITIALIZED"
}
export type inStateType = {
    initialized:boolean
}
export type stateType = {
    initialize: inStateType
}
type dispatchType = ReturnType<typeof InitializedSuccess> | getAuthUserDataType

let initialState = {
    initialized:false
}

export const appReducer = (state: inStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, initialized:true
            }
        default :
            return state
    }
}

export const InitializedSuccess = () => ({
    type: SET_INITIALIZED
})

export const initializeApp = ()  => {
    return async (dispatch:any) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(InitializedSuccess())
        })

    }
}


