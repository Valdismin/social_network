import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddMessageType, AddPostType, stateAllType, updateNewMessageType, updateNewPostType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {storeReduxAllType} from "../../App";

type postsPropsType = {
    store: storeReduxAllType
    newPostsText: string
    dispatch:(action:AddPostType|updateNewPostType|AddMessageType|updateNewMessageType) => void
}


export const Profile = (props: postsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}