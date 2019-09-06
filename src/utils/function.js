export function getLanguage() {
    //中文mac 下google浏览器显示的是en TODO 
    var JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
    if (JsSrc.indexOf('zh') >= 0) {
        // 假如浏览器语言是中文
        return 'zh'
    } else if (JsSrc.indexOf('en') >= 0) {
        // 假如浏览器语言是英文
        return 'en'
    } else {
        return 'en'
    }
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