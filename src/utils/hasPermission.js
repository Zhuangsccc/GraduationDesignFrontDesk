import store from "@/store"
export function hasPermission(permission){
    const myPermission = store.getters.permission
    return myPermission.indexOf(permission)>-1
}
export function hasPermission_table(permission){
    const myPermission = store.getters.myPermissions_table
    return myPermission.indexOf(permission)>-1
}