import request from '@/utils/request'
//获取财务收费
export function getFinancialCharges(pageIndex,pageSize){
    return request({
        url:"/finance/getFinancialCharges",
        method:"get",
        params:{
            pageIndex,
            pageSize
        }
    })
}