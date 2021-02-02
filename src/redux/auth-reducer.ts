import {authAPI} from "../api/api";
import {Dispatch} from "redux";


const SET_USER_DATA = "SET_USER_DATA"

type setUserDataType = {
    type: "SET_USER_DATA",
    data: {}
}
export type stateType = {
    auth:inStateType
}
export type inStateType = {
    userID: number,
    email: string,
    login: string,
    isAuth:boolean
}
type dispatchType = ReturnType<typeof setAuthUserData>

let initialState = {
    userID: 1,
    email: "",
    login: "",
    isAuth:false
}


export const authReducer = (state: inStateType = initialState, action: setUserDataType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data,isAuth:true
            }
        default :
            return state
    }
}

export const setAuthUserData = (userID: number, email: string, login: string) => ({type: SET_USER_DATA, data:{userID,email,login}})
export const getAuthUserData = () => (dispatch:Dispatch<dispatchType>) => {
    authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let email = response.data.data.email
                let id = response.data.data.id
                let login = response.data.data.login

                dispatch(setAuthUserData(id, email, login))
            }
        }
    )
}
