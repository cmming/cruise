export function getLanguage() {
    var JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase(),
        defaultLange = 'en';
    if (JsSrc.indexOf('zh') >= 0) {
        // 假如浏览器语言是中文
        defaultLange = 'zh'
        return 'zh'
    }
    return defaultLange;
}

export function mergeFile(modulesFiles) {
    const modules = modulesFiles.keys().reduce((modules, modulePath) => {
        // set './app.js' => 'app'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
        const value = modulesFiles(modulePath)
        modules[moduleName] = value.default
        return modules
    }, {})

    return modules

}