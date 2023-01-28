import { getToken, setToken, removeToken,getName, removeName} from '@/utils/auth'
import {login} from "@/api/user"
const getDefaultState = () => {
    return {
      token: getToken(),
      name: getName(),
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
  }
  const actions={
    async login({ commit }, userInfo) {
      const { username, password } = userInfo
      let res = await login({ username: username, password: password })
      if(res.code==200){
        commit('SET_TOKEN', res.token)
        commit('SET_NAME', username)
        setToken(res.token)
      }
    },
  }

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }