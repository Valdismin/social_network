const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

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

export const followAC = (userId: number): followType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): unFollowType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<usersDataType>): setUsersType => ({type: SET_USERS, users})

export type stateType = {
    usersPage: userType
}

export type userType = {
    users: Array<usersDataType>
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
    users: []
}


export const usersReducer = (state: userType = initialState, action: followType | unFollowType | setUsersType) => {
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
            return {...state, users: [...state.users, ...action.users]}
        default :
            return state
    }
}