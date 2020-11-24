import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/porfile_reducer";

type profilePropsType = {
    profile:ProfileType | null
}

export const Profile = (props:profilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}