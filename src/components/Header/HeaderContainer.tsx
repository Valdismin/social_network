import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout, stateType} from "../../redux/auth-reducer";



type mapDispatchToPropsType = {
    logout:() => void
}
type mapStateToPropsType = {
    isAuth:boolean,
    login:string | null
}
type PropsType = mapDispatchToPropsType & mapStateToPropsType

export class HeaderContainer extends React.Component<PropsType> {


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />
    }
}

let mapStateToProps = (state: stateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)