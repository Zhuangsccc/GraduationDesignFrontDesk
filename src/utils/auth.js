import Cookies from 'js-cookie'

const TokenKey = 'reception_token'
const NameKey="reception_name"
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