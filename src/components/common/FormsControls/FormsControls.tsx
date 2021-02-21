import React from "react"
import styles from "./FormsControls.module.css"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"

type FormsControlParamsType = {
    meta:WrappedFieldMetaProps,
    children:React.ReactNode
}

const FormControl:React.FC<FormsControlParamsType> = ({meta:{touched,error},children}) => {
    const hasTouched = touched && error

    return (
        <div className={styles.formControl + " " + (hasTouched ? styles.error : " ")}>
            <div>
                {children}
            </div>
            <div>
                {hasTouched && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea:React.FC<WrappedFieldProps> = (props) => {
    const {input,meta,children,...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>

}

export const Input = (props:any) => {
    const {input,meta,child,...restProps} :any = props
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}