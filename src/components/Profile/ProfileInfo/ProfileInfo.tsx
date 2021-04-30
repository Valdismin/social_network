import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/porfile_reducer";
import {ProfileStatusWithHooks2} from "./ProfileStatusWithHooks2";
import {LinearProgress} from "@material-ui/core";
import userPhoto from "./../../../assets/images/user.png"

type profileInfoType = {
    profile:ProfileType | null,
    status:string| null,
    updateStatus : (status:string) => void
    owner:boolean
    savePhoto:(file:any) => void
}

export const ProfileInfo = (props:profileInfoType) => {

    if(!props.profile || !props.status) {
        return <LinearProgress />
    }

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        debugger
        if(e.target.files !== null && e.target.files.length > 0 ){
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.description}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.owner ? <input type={"file"} onChange={onMainPhotoSelected}/> : null}
                <ProfileStatusWithHooks2 status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}