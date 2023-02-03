import { getToken, setToken, removeToken, getName, removeName,setStu,getStu,removeStu, setName } from '@/utils/auth'
import { login } from "@/api/user"
import { resetRouter } from '@/router'
const getDefaultState = () => {
  return {
    token: getToken(),
    name: getName(),
    stu:getStu()
  }
}

const state = getDefaultState()
const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_STU:(state,stu)=>{
    state.stu = stu
  }
}
const actions = {
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    let res = await login({ username: username, password: password })
    if (res.code == 200) {
      commit('SET_TOKEN', res.token)
      commit('SET_NAME', username)
      commit("SET_STU",res.stuName)
      setToken(res.token)
      setStu(res.stuName)
      setName(username)
      return new Promise((resolve, reject) => {
        resolve(res.code)
      })
    }
  },
  // user logout
  logout({ commit, state }) {
    removeToken() 
    removeName()
    removeStu()
    resetRouter()
    commit('RESET_STATE')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}