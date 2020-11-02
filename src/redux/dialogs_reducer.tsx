import React from "react";
import {
    AddMessageType,
    AddPostType, dialogsAllType, messagePropsType,
    updateNewMessageType,
    updateNewPostType
} from "./store";

export const addMessageCreateAction = (messageText: string): AddMessageType => {
    return {type: "ADD-MASSAGE", newMessageText: messageText}
}

export const updateNewMassageCreateAction = (messageText: string): updateNewMessageType => {
    return {type: "UPDATE-NEW-MASSAGE-CHANGE", newMessText: messageText}
}

let initialState = {
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
    newMessageText: ""
}

export const dialogsReducer = (state: dialogsAllType = initialState, action: AddPostType | updateNewPostType | AddMessageType | updateNewMessageType) => {
    switch (action.type) {
        case "ADD-MASSAGE":
            let NewMessage: messagePropsType = {
                id: 4,
                message: action.newMessageText
            }
            state.messagesData.push(NewMessage)
            state.newMessageText = ""
            return state
        case "UPDATE-NEW-MASSAGE-CHANGE":
            state.newMessageText = action.newMessText
            return state
        default:
            return state
    }
}