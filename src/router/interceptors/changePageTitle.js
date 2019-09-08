//Dynamically Modify the title of the page
import i18n from '@/lang/index'

export default function changePageTitle(to) {
    // Dynamically modify the page's lang
    if(i18n.locale=='zh'){
        document.getElementsByTagName('html')[0].setAttribute('lang','zh-CN')
    }else{
        document.getElementsByTagName('html')[0].setAttribute('lang','en')
    }
    document.getElementsByTagName('html')[0].getAttribute('lang')
    if (to.meta.title) {
        document.title = i18n.messages[i18n.locale]['layout']['menu'][to.meta.title]?i18n.messages[i18n.locale]['layout']['menu'][to.meta.title]:i18n.messages[i18n.locale]['layout']['menu']['default']
    }
}