
import {
    AddMessageType,
    AddPostType, dialogsAllType, messagePropsType,
    updateNewMessageType,
    updateNewPostType
} from "./store";

export const addMessageCreateAction = (): AddMessageType => {
    return {type: "ADD-MASSAGE"}
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
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, NewMessage],
                newMessageText: ""
            }
        case "UPDATE-NEW-MASSAGE-CHANGE":
            return {
                ...state,
                newMessageText: action.newMessText
            }
        default:
            return state
    }
}