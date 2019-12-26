import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  if (store.getters.routeState) {
    store.dispatch('GenerateRoutes').then(() => {
      router.addRoutes(store.getters.addRouters)
      next({ ...to, replace: true })
    })
  } else {
    next()
  }
})

router.afterEach((to, from) => {
})
