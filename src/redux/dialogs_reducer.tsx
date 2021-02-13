type AddMessageType = {
    type: "ADD-MASSAGE",
    newMessageText:string
}

export type dialogsAllType = {
    dialogsData: Array<dialogsPropsType>
    messagesData: Array<messagePropsType>
}
export type dialogsPropsType = {
    id: string
    name: string
}
export type messagePropsType = {
    id: number
    message: string
}


export const addMessageCreateAction = (newMessageText:string): AddMessageType => {
    return {type: "ADD-MASSAGE",newMessageText}
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
    ]
}

export const dialogsReducer = (state: dialogsAllType = initialState, action:AddMessageType ) => {


    switch (action.type) {
        case "ADD-MASSAGE":
            let NewMessage: messagePropsType = {
                id: 4,
                message: action.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, NewMessage],
            }
        default:
            return state
    }
}