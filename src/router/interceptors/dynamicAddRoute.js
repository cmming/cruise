import { mergeFile } from '@/utils/function'
import store from '@/store'
export function fnAddDynamicRoutes(dynamicRoutes) {
    function importCompent(dynamicRoutes) {
        dynamicRoutes.map(((val) => {
            try {
                //1.必须经过转换成一个零时变量 使用表达式 import
                // 2.同时import 前面必须接一个字符串 否则不认识
                // 3.捕获不存在的组件给其 一个一定存在的组件
                // 4.prefetch  webpackPrefetch  空闲时才会下载
                let component = val['component']
                val['component'] = () => {
                    return import ( /* webpackPrefetch: true */ `@/${component}`)
                        .then((component) => { return component })
                        .catch(() =>
                            import ( /* webpackPrefetch: true */ '@/modules/errorPage/views/404'))
                }
                if (val.children && val.children.length >= 1) {
                    importCompent(val.children)
                } else {
                    val['children'] = []
                }
            } catch (e) {
                throw e;
            }
        }))
    }

    importCompent(dynamicRoutes)


    console.log('%c!<-------------------- 动态(菜单)路由 s -------------------->', 'color:blue')
    console.log(dynamicRoutes)
    console.log('%c!<-------------------- 动态(菜单)路由 e -------------------->', 'color:blue')

    return dynamicRoutes
}

function fnAddDynamicMenu(dynamicMenu) {
    let dynamicMenuTmp = [...dynamicMenu]

    function fnAddMenu(dynamicMenuTmps) {
        dynamicMenuTmps.map((val) => {
            if (val.meta.type === 'menu') {
                _.unset(val, 'component')
                if (val.children && val.children.length >= 1) {
                    fnAddMenu(val.children)
                } else {
                    val['children'] = []
                }
            } else {
                _.pull(dynamicMenuTmps, val)
            }
        })
    }

    fnAddMenu(dynamicMenuTmp)

    return dynamicMenuTmp
}



// eslint-disable-next-line
export function dynamicAddRoute(to, from, next, router) {
    let routerList = []

    // https://webpack.js.org/guides/dependency-management/#requirecontext
    const modulesFiles = require.context('@/modules', true, /\.router.js$/)

    // it will auto require all vuex module from modules file
    const modules = mergeFile(modulesFiles)

    for (let i in modules) {
        routerList.push(...modules[i])
    }

    if (!router.options.isLoad) {
        // to vue-router
        let routes = fnAddDynamicRoutes(routerList)
        router.addRoutes(routes)
            // to menu list
        let menus = fnAddDynamicMenu(routerList)
        store.dispatch('setUserMenu', menus)

        router.options.isLoad = true
        next({...to, replace: true })
    } else {
        next()
    }
}