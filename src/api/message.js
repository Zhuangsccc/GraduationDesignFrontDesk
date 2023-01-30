import request from "@/utils/request"
export function getMessageBoard(pageIndex,pageSize){
    return request({
        url:"/stuAdmin/getMessageBoard",
        method:"post",
        data:{
            pageIndex,
            pageSize
        }
    })
}
export function postMessage(data){
    return request({
        url:"/stuAdmin/postMessage",
        method:"post",
        data,
    })
}