import { stateType } from '../redux/redux-store';

export const getUsersContainer = (state:stateType)=> {
    return state.usersPage.users
}
export const getPageSize = (state:stateType)=> {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state:stateType)=> {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state:stateType)=> {
    return state.usersPage.currentPage
}
export const getFollowingInProgress = (state:stateType)=> {
    return state.usersPage.followingInProgress
}
export const getIsFetching = (state:stateType)=> {
    return state.usersPage.isFetching
}