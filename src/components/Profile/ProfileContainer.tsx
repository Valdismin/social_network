import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile, stateType} from "../../redux/porfile_reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";

type mapStateToPropsType = {
    profile: ProfileType | null
}
type pathParamsType = {
    userId: string
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: string) => void
}
type ownPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<pathParamsType> & ownPropsType


const ProfileContainer = (props: PropsType) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {

            props.setUserProfile(response.data)

        })
    })

    return (
        <Profile profile={props.profile}/>)
}

let mapStateToProps = (state: stateType): mapStateToPropsType => ({
    profile: state.postsPropsAll.profile
})

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)