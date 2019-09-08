// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('@', true, /zh.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    modules[value.default.langKey] = value.default.lang
    return modules
}, {})


export default modules