import React, {useEffect} from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, stateType} from "../../redux/auth-reducer";


type mapDispatchToPropsType = { setAuthUserData: (userID: number, email: string, login: string) => void }
type mapStateToPropsType = {
    isAuth:boolean,
    login:string
}
type PropsType = mapDispatchToPropsType & mapStateToPropsType

export class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
                if (response.data.resultCode === 0) {
                    let email = response.data.data.email
                    let id = response.data.data.id
                    let login = response.data.data.login

                    this.props.setAuthUserData(id, email, login)
                }
            }
        )
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)