import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsPropsType} from "../../redux/state";




export const Profile = (props:postsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData = {props.state.postsData}
                     addPost={props.addPost}
                     newPostsText={props.newPostsText}
                     UpdateNewPostChange = {props.UpdateNewPostChange}/>
        </div>
    )
}