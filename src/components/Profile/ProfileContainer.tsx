import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, savePhoto, updateStatus} from "../../redux/porfile_reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {stateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: null | ProfileType
    status:string| null,
    autorisedUserId:number | null,
}
type pathParamsType = {
    userId: string
}
type mapDispatchToPropsType = {
    updateStatus: (status: string) => void
    getUserProfile: (userId: string) => void
    getStatus: (userId: number) => void
    savePhoto:(file:any) => void
}
type ownPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<pathParamsType> & ownPropsType


const ProfileContainer = (props: PropsType) => {
    let userId = props.match.params.userId

    useEffect(() => {
        if (!userId) {
            userId = String(props.autorisedUserId)
        }
        props.getUserProfile(userId)
    },[userId])

    if (props.profile) {
        props.getStatus(props.profile.userId)
    }
    return (
        <Profile profile={props.profile} status = {props.status} updateStatus={props.updateStatus} owner={!props.match.params.userId} savePhoto={props.savePhoto}/>)
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        profile: state.postsPropsAll.profile,
        status:state.postsPropsAll.status,
        autorisedUserId:state.auth.id
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus,savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer) as React.ComponentType