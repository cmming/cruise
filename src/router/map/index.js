import { mergeFile } from '@/utils/function'
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./', true, /\.router.js$/)

// it will auto require all vuex module from modules file
const modules = mergeFile(modulesFiles)

let result = []
for (let i in modules) {
    result.push(...modules[i])
}

export default result