import Vue from 'vue'
import Vuex from 'vuex'
import { mergeFile } from '@/utils/function'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('@', true, /\.store.js$/)

// you do not need `import app from './modules/app.store.js'`
// it will auto require all vuex module from modules file
const modules = mergeFile(modulesFiles)


const store = new Vuex.Store({
    modules
})

export default store