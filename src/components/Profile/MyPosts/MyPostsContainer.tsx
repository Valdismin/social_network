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
import {MyPosts} from "./MyPosts";
import {storeReduxAllType} from "../../../App";

type postsAllType = {
    store:storeReduxAllType
}

export const MyPostsContainer = (props:postsAllType) => {

    const addNewPost = () => {
        props.store.dispatch(addPostCreateAction(props.store.getState().postsPropsAll.newPostsText))
    }

    let onPostChange = (text:string) => {
        props.store.dispatch(updateNewPostCreateAction(text))
    }

    return (
    <MyPosts updateNewPostText={onPostChange} addPost={addNewPost} postsData={props.store.getState().postsPropsAll.postsData} newPostsText={props.store.getState().postsPropsAll.newPostsText}/>
    )
}