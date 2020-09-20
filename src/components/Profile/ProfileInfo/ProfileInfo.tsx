import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.img}>
                <img
                    src='https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'
                    alt='Main image'/>
            </div>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    )
}