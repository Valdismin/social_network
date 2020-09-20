import React from "react";
import s from './Post.module.css'

type PropsPost = {
    message: string
    count_likes: number
}

export const Post : React.FC<PropsPost> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg'/>
            {props.message}
            <div>
                <span>{props.count_likes} Like</span>
            </div>
        </div>
    )
}