import Vue from 'vue'
import Router from 'vue-router'
import { dynamicAddRoute } from './interceptors/index'
// import Home from '../views/Home.vue'
// import map from './map/index'

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

// export default new Router({
//     routes: [{
//             path: '/',
//             name: 'home',
//             component: Home
//         },
//         {
//             path: '/about',
//             name: 'about',
//             // route level code-splitting
//             // this generates a separate chunk (about.[hash].js) for this route
//             // which is lazy-loaded when the route is visited.
//             component: () =>
//                 import ( /* webpackChunkName: "about" */ '../views/About.vue')
//         }
//     ]
// })

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
    dynamicAddRoute(to, from, next, router)
        // mathNotFound(to, from, next,router)
})


export default router