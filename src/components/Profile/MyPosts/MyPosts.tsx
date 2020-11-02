import React, {RefObject} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    AddMessageType,
    AddPostType,
    myPostPropsType,
    updateNewMessageType,
    updateNewPostType
} from "../../../redux/store";
import {addPostCreateAction, updateNewPostCreateAction} from "../../../redux/porfile_reducer";


type postsAllType = {
    postsData: Array<myPostPropsType>
    newPostsText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


export const MyPosts = (props: postsAllType) => {

    let postElements = props.postsData.map(p => <Post message={p.message} count_likes={p.likesCount}/>)
    let NewPost = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        // @ts-ignore
        let text = NewPost.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                     <textarea onChange={onPostChange} ref={NewPost}
                               value={props.newPostsText}>
                     </textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.content}>
                {postElements}
            </div>
        </div>
    )
}