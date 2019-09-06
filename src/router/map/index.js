// const modulesFiles = require.context('@/modules', true, /\.router.js$/)
const modulesFiles = require.context('./', true, /\.router.js$/)

// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {

    console.log(modules)
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

console.log(modules)
let result = []
for (let i in modules) {
    result.push(...modules[i])
}

export default result