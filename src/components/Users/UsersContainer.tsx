import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    followType,
    setUsersAC, setUsersType, stateType,
    unfollowAC,
    unFollowType,
    usersDataType
} from "../../redux/users_reducer";

let mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: (action: followType | unFollowType | setUsersType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        set_users: (users: Array<usersDataType>) => {
            dispatch(setUsersAC(users))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)