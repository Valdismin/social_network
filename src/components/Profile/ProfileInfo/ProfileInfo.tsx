import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/porfile_reducer";
import {ProfileStatusWithHooks2} from "./ProfileStatusWithHooks2";
import {LinearProgress} from "@material-ui/core";

type profileInfoType = {
    profile:ProfileType | null,
    status:string| null,
    updateStatus : (status:string) => void
}

export const ProfileInfo = (props:profileInfoType) => {

    if(!props.profile || !props.status) {
        return <LinearProgress />
    }

    return (
        <div>
            <div className={s.img}>
               {/* <img
                    src='https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'
                    alt='Main image'/>*/}
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks2 status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}