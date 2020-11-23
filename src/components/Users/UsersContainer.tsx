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
    usersDataType
} from "../../redux/users_reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/preloader";

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
    isFetching: boolean
}

export class UsersContainer extends React.Component<usersAllType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setIsFetching(false)
                this.props.set_users(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setIsFetching(false)
                this.props.set_users(response.data.items)
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
                   unfollow={this.props.unfollow}/>
        </>
    }
}

let mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*let mapDispatchToProps = (dispatch: (action: followType | unFollowType | setUsersType | setCurrentPageType | set_total_users_count | set_is_fetching) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        set_users: (users: Array<usersDataType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }


    }
}*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    set_users,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersContainer)
