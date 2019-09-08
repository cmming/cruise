import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('@', true, /\.store.js$/)


const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    return Object.assign(modules,value.default)
}, {})

const store = new Vuex.Store({
    modules
})

export default store