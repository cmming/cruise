import { mergeFile } from '@/utils/function'
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('@', true, /\.en.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = mergeFile(modulesFiles)


export default modules