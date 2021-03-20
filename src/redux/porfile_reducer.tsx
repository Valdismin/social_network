import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

export type myPostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotosType = { small: string, large: string }
export type AddPostType = {
    type: "ADD-POST",
    newPost: string
}
export type setUserProfileType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}
export type setStatusType = {
    type: "SET-STATUS"
    status: string
}


export type dispatchType = AddPostType | setUserProfileType | setStatusType
export type stateType = typeof initialState
let initialState = {
    postsData: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'Bonjour', likesCount: 3},
    ],
    profile: null as ProfileType | null,
    status: ""
}


export const profileReducer = (state = initialState, action: AddPostType | setUserProfileType | setStatusType): stateType => {
    switch (action.type) {
        case "ADD-POST":
            let NewPost: myPostPropsType = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, NewPost],
            }

        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default :
            return state
    }
}
export const addPostCreateAction = (newPost: string): AddPostType => ({
    type: "ADD-POST", newPost})as const

export const setUserProfile = (profile: ProfileType): setUserProfileType => ({
   type: "SET-USER-PROFILE", profile
})as const
export const setStatus = (status: string): setStatusType => (
    {type: "SET-STATUS", status}
) as const

export const getUserProfile = (userId: string): ThunkAction<Promise<void>, stateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response))
    }
}
export const getStatus = (userId: number): ThunkAction<Promise<void>, stateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
        await profileAPI.getStatus(userId).then(response => dispatch(setStatus(response.data)))

    }
}
export const updateStatus = (status: string): ThunkAction<Promise<void>, stateType, unknown, ActionsTypes> => {
    return async (dispatch) => {
        await profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

/*export const updateStatus = (status:string): ThunkAction<Promise<void>, stateType, unknown, ActionsTypes> => (dispatch) => {
    debugger
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}*/

export type ActionsTypes =
    ReturnType<typeof addPostCreateAction>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setStatus>