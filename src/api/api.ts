import axios from "axios";

const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "bc385949-3d41-41a5-85e6-7ba062998611"
    }
})

export const usersAPI = {
    getUsers(currentPage:number,pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
export const followAPI={
    unfollow (userID:number) {
        return instance.delete(`follow/${userID}`).then(response => response.data)
    },
    follow(userID:number){
        return instance.post(`follow/${userID}`,{}).then(response => response.data)
    }
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

type meResponseType = {
    data: { id:number,email:string,login:string },
    resultCode:ResultCodesEnum,
    messages:Array<string>
}
type loginResponseType = {
    data: { id:number},
    resultCode:ResultCodesEnum,
    messages:Array<string>
}
export const authAPI={
    me () {
        return  instance.get<meResponseType>(`auth/me`).then(res => res.data)
    },
    login(email:string,password:string,rememberMe = false) {
        return instance.post(`auth/login`,{email,password,rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}
export const profileAPI={
    getProfile (userId:string) {
        return  instance.get(`profile/${userId}`).then(response => {
            return response.data})
    },
    getStatus(userId:number) {
        return  instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return  instance.put(`profile/status`, {status: status})
    }
}





