import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    stateType,
    unfollow,
    usersDataType, toggleIsFollowingProgress, getUsers, getFollow, getUnfollow
} from "../../redux/users_reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/preloader";

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

export default connect(mapStateToProps, {
    getFollow,
    getUnfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UsersContainer)
