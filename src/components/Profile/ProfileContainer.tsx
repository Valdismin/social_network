import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/porfile_reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {stateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToPropsType = {
    profile: null | ProfileType
    status:string,
    autorisedUserId:number | null,
    isAuth:boolean
}
type pathParamsType = {
    userId: string
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void,
    getStatus:(userId: string) => void,
    updateStatus:(status:string) => void
}
type ownPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<pathParamsType> & ownPropsType


const ProfileContainer = (props: PropsType) => {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = String(props.autorisedUserId)
            if(!userId) {
                //this.props.history.push("/login")
            }
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    },[])


    return (
        <Profile profile={props.profile} status = {props.status} updateStatus={updateStatus}/>)
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        profile: state.postsPropsAll.profile,
        status:state.postsPropsAll.status,
        autorisedUserId:state.auth.userID,
        isAuth:state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer) as React.ComponentType