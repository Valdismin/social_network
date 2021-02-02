import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/porfile_reducer";
import {Redirect} from "react-router-dom";

type profilePropsType = {
    profile:ProfileType | null,
    isAuth:boolean
}

export const Profile = (props:profilePropsType) => {

    if(props.isAuth === false) return <Redirect to='/login' />
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}