import {authAPI, ResultCodesEnum} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const SET_ERROR = "SET_ERROR"

type ActionsType = setUserDataType | setErrorDataType

type setUserDataType = {
    type: "SET_USER_DATA",
    data: {},
    isAuth: boolean
}
type setErrorDataType = {
    type: "SET_ERROR",
    error: string
}
export type stateType = {
    auth: inStateType
}
export type inStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    serverError: null | string
}
type dispatchType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setError>

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    serverError: null
}

export const authReducer = (state: inStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
                serverError: null
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

export type setUserDataActionType = {
    id: number | null
    email: string | null
    login: string | null
}
export const setAuthUserData = (data: setUserDataActionType, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data,
    isAuth
} as const)
export const setError = (error: string) => ({type: "SET_ERROR", error} as const)


export const getAuthUserData = (): ThunkAction<void, stateType, unknown, dispatchType> => {
    return (dispatch) => {
        return authAPI.me().then((response) => {
                if (response.resultCode === ResultCodesEnum.Success) {
                    dispatch(setAuthUserData(response.data, true))
                }
            }
        )
    }
}
export const login = (data: dataType): ThunkAction<void, stateType, unknown, dispatchType> => {
    return async (dispatch) => {
        let response = await authAPI.login(data.email, data.password, data.rememberMe)
        if (response.resultCode === ResultCodesEnum.Success) {
            authAPI.me()
            dispatch(setAuthUserData(response.data.data,true))
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
            dispatch(setAuthUserData({email: null, id: null, login: null}, false))
        }
    }
}

export type getAuthUserDataType = ReturnType<typeof getAuthUserData>
export type dataType = {
    email: string, password: string, rememberMe: boolean
}
