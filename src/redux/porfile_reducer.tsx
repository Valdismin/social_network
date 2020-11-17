import React from "react";

export type myPostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type postsType = {
    postsData: Array<myPostPropsType>
    newPostsText: string
}

export type AddPostType = {
    type: "ADD-POST"
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
        case "ADD-POST":
            let NewPost: myPostPropsType = {
                id: 5,
                message: state.newPostsText,
                likesCount: 0
            }

            return {...state,
                postsData:[...state.postsData,NewPost],
                newPostsText:""
            }
        case "UPDATE-NEW-POST-CHANGE":
            return {...state,
                newPostsText:action.newText
            }
        default :
            return state
    }
}