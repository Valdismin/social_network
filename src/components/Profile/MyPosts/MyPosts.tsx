import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {stateType} from "../../../redux/porfile_reducer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";



type postsAllType = {
    postsPropsAll: stateType
    addPost: (newPost:string) => void
}


export const MyPosts = (props: postsAllType) => {

    let postElements = props.postsPropsAll.postsData.map(p => <Post message={p.message} count_likes={p.likesCount}/>)


    const addNewPost = (values:FormDataType) => {
        props.addPost(values.newPost)

    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <MyPostsFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.content}>
                {postElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPost:string
}

const maxLength = maxLengthCreator(30)

const MyPostsForm :React.FC <InjectedFormProps<FormDataType>>  = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPost"} placeholder={"Enter your post"}
                validate={[required,maxLength]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm<FormDataType>({form:"addPostForm"}) (MyPostsForm)