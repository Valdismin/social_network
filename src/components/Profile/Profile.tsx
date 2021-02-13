import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, updateStatus} from "../../redux/porfile_reducer";


type profilePropsType = {
    profile:ProfileType | null,
    status:string,
    updateStatus : (status:string) => void
}

export const Profile = (props:profilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}