import React from "react";
import preloader from "../../../assets/images/preloader_users.svg"

export const Preloader = (props:any) => {
    return <div style={{backgroundColor : 'white'}}>
    <img src={preloader}/>
    </div>
}