import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {stateType} from "../../redux/redux-store";
import { Redirect } from 'react-router-dom';

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm:React.FC <InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"}
                       type={"password"}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"}
                       component={Input}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}



let LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const Login = (props:loginType)=>{
    const onSubmit = (formData:FormDataType) => {
        let email = formData.login
        let password = formData.password
        let rememberMe = formData.rememberMe
        props.login(email,password,rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type loginType = {
    login:(email:string,password:string,rememberMe:boolean) => void,
    isAuth:boolean
}

const mapStateToProps = (state:stateType)=> ({
    isAuth:state.auth.isAuth
})


export default connect (mapStateToProps,{login})(Login)