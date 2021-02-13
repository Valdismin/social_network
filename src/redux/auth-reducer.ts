import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = "SET_USER_DATA"

type setUserDataType = {
    type: "SET_USER_DATA",
    data: {}
}
export type stateType = {
    auth: inStateType
}
export type inStateType = {
    userID: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type dispatchType = ReturnType<typeof setAuthUserData>

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: inStateType = initialState, action: setUserDataType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
        default :
            return state
    }
}

export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {userID, email, login, isAuth}
})
export const getAuthUserData = (): ThunkAction<void, stateType, unknown, dispatchType> => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let email = response.data.data.email
            let id = response.data.data.id
            let login = response.data.data.login
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<Promise<void>, stateType, unknown, dispatchType> => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
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


