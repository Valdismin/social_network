import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItme/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsAllType} from "../../redux/store";
import {useFormik} from "formik";

import {Button, TextField} from "@material-ui/core";



export type dialogsPropsType2 = {
    onMessageChange: (body: string) => void
    addMessage: (newMessageText: string) => void
    dialogsPropsAll: dialogsAllType
}
type FormikErrorType = {
    message?: string
}


export const Dialogs = (props: dialogsPropsType2) => {

    let dialogsElements = props.dialogsPropsAll.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPropsAll.messagesData.map(m => <Message message={m.message}/>)
    const formik = useFormik({
        initialValues:{
            message:''
        },
        validate:(values) => {
            const errors:FormikErrorType={}
            if(values.message.length > 30) {
                errors.message = ''
            }
            return errors
        }
        ,
        onSubmit: value => {
            props.addMessage(value.message)
            formik.resetForm()
        }
    })


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className={s.textArea_Button}>
                                <TextField
                                    label="Add message"
                                    margin="normal"
                                    name="message"
                                    {...formik.getFieldProps('message')}
                                />
                                <Button variant="outlined" type={'submit'}  color={'primary'}>Add message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
