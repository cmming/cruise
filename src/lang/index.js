import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en/index'
import zhLocale from './zh/index'
import storage from '@/utils/storage';
import { getLanguage } from "@/utils/function";

Vue.use(VueI18n)

const messages = {
        en: enLocale,
        zh: zhLocale
    }
    // eslint-disable-next-line
    // console.log(messages)
const i18n = new VueI18n({
    locale: storage.get('app-language') || getLanguage(), // set locale
    messages // set locale messages
})


export default i18n