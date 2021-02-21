import React from 'react'
import {connect} from "react-redux";
import {
    setCurrentPage,
    usersDataType, toggleIsFollowingProgress, getUsers, getFollow, getUnfollow
} from "../../redux/users_reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { stateType } from '../../redux/redux-store';
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersContainer
} from "../../redux/users-selectors";

type usersAllType = {
    users: Array<usersDataType>
    getFollow: (userId: number) => void
    getUnfollow: (userId: number) => void
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    totalUsersCount: number
    toggleIsFollowingProgress: (isFetching: boolean,userId:number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers:(currentPage:number,pageSize:number) => void
}

export class UsersContainer extends React.Component<usersAllType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.getFollow}
                   unfollow={this.props.getUnfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}/>
        </>
    }
}

let mapStateToProps = (state: stateType) => {
    return {
        users: getUsersContainer(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose(
    connect(mapStateToProps, {
        getFollow,
        getUnfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer) as React.ComponentType
