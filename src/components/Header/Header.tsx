import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import { Button } from "@material-ui/core";


type propsType = {
    isAuth:boolean,
    login:string|null,
    logout:() => void
}

export const Header = (props:propsType) => {
    return (
        <header className={s.header}>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <Button className={s.button} onClick={props.logout}>Log out</Button></div>
                        : <button><NavLink className={s.logButton} to={'/login'}>Login</NavLink></button>}
                </div>
        </header>
    )
}