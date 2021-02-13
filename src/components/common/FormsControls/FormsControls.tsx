import React from "react";
import styles from "./FormsControls.module.css"

const FormControl = ({input,meta,child,...props} :any) => {
    const hasTouched = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasTouched ? styles.error : " ")}>
            <div>
                {props.children}
            </div>
            <div>
                {hasTouched && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props:any) => {
    const {input,meta,child,...restProps} :any = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>

}

export const Input = (props:any) => {
    const {input,meta,child,...restProps} :any = props
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}