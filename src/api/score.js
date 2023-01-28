import request from "@/utils/request"
export function getScoreByName(name,pageIndex,pageSize){
    return request({
        url:"/score/getScoreByName",
        method:"post",
        data:{
            name,
            pageIndex,
            pageSize
        }
    })
}