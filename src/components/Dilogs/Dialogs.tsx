import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItme/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsAllType, dialogsPropsType, messagePropsType} from "../../redux/store";


type dialogsPropsType2 = {
    onMessageChange:(body:string)=>void
    addMessage:()=>void
    dialogsPropsAll:dialogsAllType
}


export const Dialogs = (props: dialogsPropsType2) => {

    let dialogsElements = props.dialogsPropsAll.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPropsAll.messagesData.map(m => <Message message={m.message}/>)
    const NewMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.addMessage()
    }

    const onMessageChange = (e:any) => {
        let body = e.target.value
        props.onMessageChange(body)
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
                          value={props.dialogsPropsAll.newMessageText}
                          autoFocus={true}
                ></textarea>
                    </div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>

        </div>
    )
}