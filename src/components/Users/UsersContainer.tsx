import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    set_users,
    stateType,
    unfollow,
    usersDataType, toggleIsFollowingProgress
} from "../../redux/users_reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/preloader";
import {usersAPI} from "../../api/api";


type usersAllType = {
    users: Array<usersDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    set_users: (usersData: Array<usersDataType>) => void
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    totalUsersCount: number
    setIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean,userId:number) => void
    isFetching: boolean
    followingInProgress: Array<number>

}

export class UsersContainer extends React.Component<usersAllType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.set_users(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.set_users(data.items)
            }
        )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
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
    follow,
    unfollow,
    set_users,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleIsFollowingProgress
})(UsersContainer)
