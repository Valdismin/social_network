import React, {useEffect} from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, stateType} from "../../redux/auth-reducer";



type mapDispatchToPropsType = { getAuthUserData: () => void }
type mapStateToPropsType = {
    isAuth:boolean,
    login:string
}
type PropsType = mapDispatchToPropsType & mapStateToPropsType

export class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()

    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

let mapStateToProps = (state: stateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)