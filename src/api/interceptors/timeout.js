// import {
//     Notification
// } from 'element-ui'
import i18n from '@/lang/index'
export default function timeout(error) {
    // console.log(error,error.code,error.message)
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log(i18n.messages[i18n.locale]['response']['ECONNABORTED'])
        // Notification.error({
        //     title: "error",
        //     message: i18n.messages[i18n.locale]['response']['ECONNABORTED'],
        //     //弹框 提示3秒
        //     duration: 3000,
        // });
    }
}