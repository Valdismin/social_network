import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, updateStatus} from "../../redux/porfile_reducer";
import s from "./Profile.module.css"


type profilePropsType = {
    profile:ProfileType | null,
    status:string | null,
    updateStatus : (status:string) => void
    owner:boolean
    savePhoto:(file:any) => void
}

export const Profile = (props:profilePropsType) => {

    return (
        <div className={s.main}>
            <ProfileInfo profile={props.profile} owner={props.owner} status = {props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}