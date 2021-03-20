import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostCreateAction, stateType} from "../../../redux/porfile_reducer";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@material-ui/core";




type postsAllType = {
    postsPropsAll: stateType
}
type FormikErrorType = {
    post?: string
}


export const MyPosts = (props: postsAllType) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.post.length > 50) {
                errors.post = '';
            }
            return errors;
        },
        onSubmit: value => {
            dispatch(addPostCreateAction(value.post))
            formik.resetForm()
        }
    })

    let postElements = props.postsPropsAll.postsData.map(p => <Post message={p.message} count_likes={p.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.textArea_Button}>
                <TextField
                    label="Create Post"
                    margin="normal"
                    name="post"
                    {...formik.getFieldProps('post')}
                />
                <Button type={'submit'} variant="outlined" color={'primary'}>Add post</Button>
                </div>
            </form>
            <div className={s.content}>
                {postElements}
            </div>
        </div>
    )
}

