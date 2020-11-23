import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/porfile_reducer";
import {Preloader} from "../../common/Preloader/preloader";

type profileInfoType = {
    profile:ProfileType
}

export const ProfileInfo = (props:profileInfoType) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.img}>
                <img
                    src='https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'
                    alt='Main image'/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}