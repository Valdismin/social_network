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
export type updateNewPostType = {
    type: "UPDATE-NEW-POST-CHANGE"
    newText: string
}
export type AddMessageType = {
    type: "ADD-MASSAGE"
}
export type updateNewMessageType = {
    type: "UPDATE-NEW-MASSAGE-CHANGE"
    newMessText: string
}
export type setUserProfileType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}
export type setStatusType = {
    type: "SET-STATUS"
    status: string
}


export type dispatchType = AddPostType | setUserProfileType | updateNewPostType | setStatusType
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


export const profileReducer = (state = initialState, action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType | setUserProfileType | setStatusType):stateType => {
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
export const addPostCreateAction = (newPost: string): AddPostType => {
    return {type: "ADD-POST", newPost}
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => {
    return {type: "SET-USER-PROFILE", profile}
}
export const setStatus = (status: string): setStatusType => {
    return {type: "SET-STATUS", status}
}

export const getUserProfile = (userId: string) : ThunkAction<Promise<void>, stateType, unknown, dispatchType>=> {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getStatus = (userId: string): ThunkAction<Promise<void>, stateType, unknown, dispatchType> => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateStatus = (status: string): ThunkAction<Promise<void>, stateType, unknown, dispatchType> => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode == 0) {
            dispatch(setStatus(status))
        }
    }
}