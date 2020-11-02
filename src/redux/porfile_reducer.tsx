import React from "react";
import {
    AddMessageType,
    AddPostType,
    myPostPropsType, postsType,
    updateNewMessageType,
    updateNewPostType
} from "./store";

export const addPostCreateAction = (postText: string): AddPostType => {
    return {type: "ADD-POST", newPostsText: postText}
}

export const updateNewPostCreateAction = (postText: string): updateNewPostType => {
    return {type: "UPDATE-NEW-POST-CHANGE", newText: postText}}

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
        case "ADD-POST":
            let NewPost: myPostPropsType = {
                id: 5,
                message: action.newPostsText,
                likesCount: 0
            }
            state.postsData.push(NewPost)
            state.newPostsText = ""
            return state
        case "UPDATE-NEW-POST-CHANGE":
            state.newPostsText = action.newText
            return state
        default :
            return state
    }
}