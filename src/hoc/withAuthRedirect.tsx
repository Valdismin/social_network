import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {stateType} from "../redux/redux-store";

type mapStateToPropsForRedirectType = {
    isAuth:boolean
}

const mapStateToPropsForRedirect = (state:stateType):mapStateToPropsForRedirectType => {
    debugger
    return {
        isAuth:state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component:ComponentType<T>)  {
    const RedirectComponent = (props:mapStateToPropsForRedirectType) => {
        debugger
        let {isAuth,...restProps} = props
            if(!props.isAuth) return <Redirect to='/login' />
            return (
                <Component {...restProps as T}/>)
        }
    return connect(mapStateToPropsForRedirect,{})(RedirectComponent)


}