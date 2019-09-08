import Vue from 'vue'
import Vuex from 'vuex'
// import { mergeFile } from '@/utils/function'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('@', true, /\.store.js$/)


const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    return Object.assign(modules,value.default)
}, {})

console.log(modules)
const store = new Vuex.Store({
    modules
})

export default store