import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddMessageType, AddPostType, stateAllType, updateNewMessageType, updateNewPostType} from "../../redux/state";

type postsPropsType = {
    state: stateAllType
    newPostsText: string
    dispatch:(action:AddPostType|updateNewPostType|AddMessageType|updateNewMessageType) => void
}


export const Profile = (props: postsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsPropsAll.postsData}
                     dispatch={props.dispatch}
                     newPostsText={props.newPostsText}
            />
        </div>
    )
}