import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItme/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsAllType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";


export type dialogsPropsType2 = {
    onMessageChange: (body: string) => void
    addMessage: (newMessageText: string) => void
    dialogsPropsAll: dialogsAllType
}


export const Dialogs = (props: dialogsPropsType2) => {

    let dialogsElements = props.dialogsPropsAll.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPropsAll.messagesData.map(m => <Message message={m.message}/>)

    const addNewMessage = (values: FormDataType) => {
        props.addMessage(values.newMessageText)
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
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>

                </div>
            </div>

        </div>
    )
}
const maxLength = maxLengthCreator(30)
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={"newMessageText"}
                       placeholder={"Enter your message"}
                       validate={[required,maxLength]}/>
                <div>
                    <button>Отправить сообщение</button>
                </div>
            </div>

        </form>
    )
}
type FormDataType = {
    newMessageText: string
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)