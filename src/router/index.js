import Vue from 'vue'
import Router from 'vue-router'
import { dynamicAddRoute, changePageTitle,cancelRequest } from './interceptors/index'

Vue.use(Router)


import routers from './map/index'
console.log(routers)
const createRouter = () => new Router({
    mode: 'hash',
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: routers,
    isLoad: false
})

const router = createRouter()

// https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // the relevant part
    router.options.isLoad = false
}

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
    changePageTitle(to)
    // Cancel the previous page request to avoid meaningless requests
    cancelRequest()
    dynamicAddRoute(to, from, next, router)
})


export default router