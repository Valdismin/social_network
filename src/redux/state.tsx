import React from "react";
import {rerenderEntireApp} from "../rerender";

export type dialogsPropsType = {
    id: string
    name: string
}

export type messagePropsType = {
    id: number
    message: string
}

export type myPostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type postsType = {
    postsData:Array<myPostPropsType>
    newPostsText:string
}

export type dialogsAllType = {
    dialogsData:Array<dialogsPropsType>
    messagesData:Array<messagePropsType>
}

export type stateAllType = {
    postsPropsAll: postsType
    dialogsPropsAll: dialogsAllType
}

export let addPost = (NewMessage:string) => {
    let NewPost:myPostPropsType = {
        id:5,
        message:NewMessage,
        likesCount:0
    }
    state.postsPropsAll.postsData.push(NewPost)
    rerenderEntireApp(state)
}

export let UpdateNewPostChange = (newText:string) => {
    state.postsPropsAll.newPostsText = newText
    rerenderEntireApp(state)
}


export let state : stateAllType = {
    postsPropsAll: {
        postsData: [
            {id: 1, message: 'Hi,how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
            {id: 3, message: 'Bonjour', likesCount: 3},
        ],
        newPostsText:"yvfkhvbd"
    },

    dialogsPropsAll: {
        dialogsData: [
            {id: "1", name: "Vlad"},
            {id: "2", name: "Dasha"},
            {id: "3", name: "Anton"},
            {id: "4", name: "Pasha"}
        ],

        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello"},
            {id: 3, message: "Bonjour"},
        ]
    }
}
