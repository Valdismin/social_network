import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {stateAllType} from "../../redux/state";

type postsPropsType = {
    state:stateAllType
    addPost:() => void
    newPostsText:string
    UpdateNewPostChange:(newText:string) => void
}


export const Profile = (props:postsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData = {props.state.postsPropsAll.postsData}
                     addPost={props.addPost}
                     newPostsText={props.newPostsText}
                     UpdateNewPostChange = {props.UpdateNewPostChange}/>
        </div>
    )
}