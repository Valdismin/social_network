import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    isAuth:boolean,
    login:string|null
}

export const Header = (props:propsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://i.insider.com/50083a5decad04460500000d?width=1100&format=jpeg&auto=webp'/>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}