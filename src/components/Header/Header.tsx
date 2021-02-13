import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    isAuth:boolean,
    login:string|null,
    logout:() => void
}

export const Header = (props:propsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://i.insider.com/50083a5decad04460500000d?width=1100&format=jpeg&auto=webp'/>
                <div className={s.loginBlock}>
                    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}