/* eslint-disable no-empty-pattern */
import User from '@/types/User'
import { authGoogle } from '../../api/auth'

export interface AuthState {
  user?: User
  isAuth?: boolean
}

const state = {
  user: {},
  isAuth: false,
}
const mutations = {
  setUser(state: any, user: User): void {
    state.user = user
  },
  setAuth(state: any, auth: AuthState): void {
    state.isAuth = auth
  },
}
const actions = {
  googleAuth(context: any, idToken: string): Promise<void> {
    return authGoogle(idToken).then((res) => {
      context.commit('setUser', res.data.data.user)
      context.commit('setAuth', true)
    })
  },
  logout(context: any) {
    context.commit('setUser', null)
    context.commit('setAuth', false)
  },
}
const getters = {
  user: (state: any): any => state.user,
  isAuth: (state: any): any => state.isAuth,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
