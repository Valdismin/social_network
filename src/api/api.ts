import axios from "axios";

const intance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "bc385949-3d41-41a5-85e6-7ba062998611"}
})

export const usersAPI = {
    getUsers(currentPage:number,pageSize:number) {
        return intance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
export const followAPI={
    unfollow (userID:number) {
        return intance.delete(`follow/${userID}`).then(response => response.data)
    },
    follow(userID:number){
        return intance.post(`follow/${userID}`,{}).then(response => response.data)
    }
}



