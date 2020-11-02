import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItme/DialogsItem";
import {Message} from "./Message/Message";
import {
    AddMessageType,
    AddPostType,
    dialogsAllType,
    updateNewMessageType,
    updateNewPostType
} from "../../redux/store";
import {addMessageCreateAction, updateNewMassageCreateAction} from "../../redux/dialogs_reducer";

type dialogsPropsType2 = {
    state: dialogsAllType
    newMessageText: string
    dispatch:(action:AddPostType|updateNewPostType|AddMessageType|updateNewMessageType) => void
}


export const Dialogs = (props: dialogsPropsType2) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message}/>)
    const NewMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.dispatch(addMessageCreateAction(props.newMessageText))
    }

    const onMessageChange = (e:any) => {
        // @ts-ignore
        let body = e.target.value
        //let text = NewMessage.current.value
        props.dispatch(updateNewMassageCreateAction(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                <textarea onChange={onMessageChange}
                          ref={NewMessage}
                          value={props.newMessageText}
                          autoFocus={true}
                ></textarea>
                    </div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>

        </div>
    )
}