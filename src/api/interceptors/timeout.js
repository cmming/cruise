import i18n from '@/lang/index'
export default function timeout(error) {
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log(i18n.messages[i18n.locale]['response']['ECONNABORTED'])
    }
}