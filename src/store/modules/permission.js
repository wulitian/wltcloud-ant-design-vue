import { asyncRouterMap, baseRouterMap } from '@/config/baseRouterSettings'

const permission = {
  state: {
    routeState: true,
    routers: baseRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = baseRouterMap.concat(routers)
      console.log(state.routers)
    },
    SET_ROUTESTATE: (state, info) => {
      state.routeState = info
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', asyncRouterMap)
        commit('SET_ROUTESTATE', false)
        resolve()
      })
    }
  }
}

export default permission
