import React from "react";
import {
    AddMessageType,
    AddPostType,
    myPostPropsType, postsType,
    updateNewMessageType,
    updateNewPostType
} from "./store";

export const addPostCreateAction = (): AddPostType => {
    return {type: "ADD-POST"}
}

export const updateNewPostCreateAction = (postText: string): updateNewPostType => {
    return {type: "UPDATE-NEW-POST-CHANGE", newText: postText}
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'Bonjour', likesCount: 3},
    ],
    newPostsText: ""
}


export const profileReducer = (state: postsType = initialState, action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType) => {
    switch (action.type) {
        case "ADD-POST": {
            let NewPost: myPostPropsType = {
                id: 5,
                message: state.newPostsText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(NewPost)
            stateCopy.newPostsText = ""
            return stateCopy
        }
        case
        "UPDATE-NEW-POST-CHANGE"
        : {
            let stateCopy = {...state}
            stateCopy.newPostsText = action.newText
            return stateCopy
        }
        default :
            return state
    }
}