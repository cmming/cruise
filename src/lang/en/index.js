// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('@', true, /en.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    modules[value.default.langKey] = value.default.lang
    return modules
}, {})


export default modules