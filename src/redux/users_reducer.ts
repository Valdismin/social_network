import {followAPI, usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type followType = {
    type: "FOLLOW"
    userId: number
}
export type unFollowType = {
    type: "UNFOLLOW"
    userId: number
}
export type setUsersType = {
    type: "SET_USERS"
    users: Array<usersDataType>
}
export type setCurrentPageType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type set_total_users_count = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}
export type set_is_fetching = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export type set_is_following_progress = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    isFetching: boolean
    userId: number
}


export const follow = (userId: number): followType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): unFollowType => ({type: UNFOLLOW, userId})
export const set_users = (users: Array<usersDataType>): setUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): set_total_users_count => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const setIsFetching = (isFetching: boolean): set_is_fetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): set_is_following_progress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export type stateType = {
    usersPage: userType

}
export type userType = {
    users: Array<usersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
export type usersDataType = {
    id: number,
    photos: { small: string, large: string },
    name: string,
    followed: boolean,
    status: string,
    location: { city: string, country: string }
}
export type dispatchType =
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof set_users> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFollowingProgress> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setCurrentPage>


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state: userType = initialState, action: dispatchType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default :
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, stateType, unknown, dispatchType>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFetching(false))
        dispatch(set_users(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch:any,userId:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const getFollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = followAPI.follow.bind(followAPI)
        let actionCreator = follow
        followUnfollowFlow(dispatch,userId,apiMethod,actionCreator)
    }
}
export const getUnfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = followAPI.unfollow.bind(followAPI)
        let actionCreator = unfollow
        followUnfollowFlow(dispatch,userId,apiMethod,actionCreator)
    }
}
