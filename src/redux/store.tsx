import React from "react";
import {profileReducer} from "./porfile_reducer";
import {dialogsReducer} from "./dialogs_reducer";

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
    postsData: Array<myPostPropsType>
    newPostsText: string
}

export type dialogsAllType = {
    dialogsData: Array<dialogsPropsType>
    messagesData: Array<messagePropsType>
    newMessageText: string
}

export type stateAllType = {
    postsPropsAll: postsType
    dialogsPropsAll: dialogsAllType
}

export type storeAllType = {
    _state: stateAllType
    getState: () => stateAllType
    subscribe: (observer: () => void) => void
    _rerenderEntireApp: () => void
    dispatch: (action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType) => void
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

/*export let store: storeAllType = {
    _state: {
        postsPropsAll: {
            postsData: [
                {id: 1, message: 'Hi,how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11},
                {id: 3, message: 'Bonjour', likesCount: 3},
            ],
            newPostsText: ""
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
            ],
            newMessageText: " "
        }
    },
    _rerenderEntireApp() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireApp = observer
    },
    dispatch(action) {
        this._state.postsPropsAll = profileReducer(this._state.postsPropsAll, action)
        this._state.dialogsPropsAll = dialogsReducer(this._state.dialogsPropsAll, action)
        this._rerenderEntireApp()

    }
}*/







