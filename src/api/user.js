import request from "@/utils/request"
export function regUser(data){
    return request({
        url:"/stuAdmin/regUser",
        method:"post",
        data,
    })
}
export function login(data){
    return request({
        url:"/stuAdmin/login",
        method:"post",
        data,
    })
}
export function getStuInfo(data){
    return request({
        url:"/stuAdmin/getStuInfo",
        method:"post",
        data
    })
}
export function updatePersonInfo(data){
    return request({
        url:"/stuAdmin/updatePersonInfo",
        method:"post",
        data
    })
}
export function updateUserPW(data){
    return request({
        url:"stuAdmin/updateUserPW",
        method:"post",
        data
    })
}