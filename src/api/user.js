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