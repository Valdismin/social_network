const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING"


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

export type stateType = {
    usersPage: userType

}

export type userType = {
    users: Array<usersDataType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

export type usersDataType = {
    id: number,
    photos: { small: string, large: string },
    name: string,
    followed: boolean,
    status: string,
    location: { city: string, country: string }
}

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


export const usersReducer = (state: userType = initialState, action: followType | unFollowType | setUsersType | setCurrentPageType | set_total_users_count | set_is_fetching) => {
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

        default :
            return state
    }
}