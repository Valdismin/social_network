import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItme/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsAllType} from "../../redux/state";

type dialogsPropsType2 = {
    state: dialogsAllType
    addMessage: () => void
    newMessageText: string
    UpdateNewMessageChange: (newMessText: string) => void
}


export const Dialogs = (props: dialogsPropsType2) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message}/>)
    const NewMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.addMessage()
    }

    const onMessageChange = () => {
        // @ts-ignore
        let text = NewMessage.current.value
        props.UpdateNewMessageChange(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                <textarea onChange={onMessageChange}
                          ref={NewMessage}
                          value={props.newMessageText}
                ></textarea>
                    </div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>

        </div>
    )
}