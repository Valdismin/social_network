import {authAPI, ResultCodesEnum} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const SET_ERROR = "SET_ERROR"

type ActionsType = setUserDataType|setErrorDataType

type setUserDataType = {
    type: "SET_USER_DATA",
    data: {}
}
type setErrorDataType = {
    type: "SET_ERROR",
    error: string
}
export type stateType = {
    auth: inStateType
}
export type inStateType = {
    userID: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    serverError: null | string
}
type dispatchType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setError>

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    serverError: null
}

export const authReducer = (state: inStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
        case SET_ERROR:
            return {
                ...state,
                serverError: action.error
            }
        default :
            return state
    }
}

export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {userID, email, login, isAuth}
})
export const setError = (error: string) => ({type: "SET_ERROR", error} as const)
export const getAuthUserData = (): ThunkAction<void, stateType, unknown, dispatchType> => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.resultCode === ResultCodesEnum.Success) {
            let email = response.data.email
            let id = response.data.id
            let login = response.data.login
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<Promise<void>, stateType, unknown, dispatchType> => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            let message = response.messages.length > 0 ? response.messages[0] : "Some error"
            dispatch(setError(message))
        }
    }
}
export const logout = (): ThunkAction<Promise<void>, stateType, unknown, dispatchType> => {
    return async (dispatch: Dispatch<dispatchType>) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export type getAuthUserDataType = ReturnType<typeof getAuthUserData>

