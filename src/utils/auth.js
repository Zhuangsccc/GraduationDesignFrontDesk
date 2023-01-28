import Cookies from 'js-cookie'

const TokenKey = 'reception_token'
const NameKey="reception_name"
const StuKey = "reception_StuKey"
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function setName(name){
  return Cookies.set(NameKey,name)
}
export function getName(){
  return Cookies.get(NameKey)
}
export function removeName(){
  return Cookies.remove(NameKey)
}
export function setStu(stu){
  return Cookies.set(StuKey,stu)
}
export function getStu(){
  return Cookies.get(StuKey)
}
export function removeStu(){
  return Cookies.remove(StuKey)
}