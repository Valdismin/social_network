import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/porfile_reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import { stateType } from "../../redux/redux-store";


type mapStateToPropsType = {
    profile: ProfileType | null,
    isAuth:boolean
}
type pathParamsType = {
    userId: string
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type ownPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<pathParamsType> & ownPropsType


const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "12449"
        }
        props.getUserProfile(userId)
    })



    return (
        <Profile profile={props.profile}
                 isAuth={props.isAuth}/>)
}

let mapStateToProps = (state: stateType): mapStateToPropsType => ({
    profile: state.postsPropsAll.profile,
    isAuth:state.auth.isAuth
})

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter)