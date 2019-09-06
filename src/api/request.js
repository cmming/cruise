import axios from 'axios'

import store from '@/store/index'

// import {responseMsgInterceptors} from './interceptors'

// import responseMsgInterceptorHandle from './interceptors/responseMsgInterceptor'
import { responseMsgInterceptorHandle, tokenHandler, timeout, cancelRequest } from './interceptors/index'

// console.log(process.env)
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    // baseURL: '/hcy', // api的base_url
    // eslint-disable-next-line
    baseURL: GLOBAL_CONFIG_SETTING.UAM_WEB_BASE_API, // api的base_url
    timeout: 15000000000000000000000000000, // request timeout
    // timeout: 15000, // request timeout
    // withCredentials: true // 选项表明了是否是跨域请求
})



service.interceptors.request.use(config => {
    store.dispatch('showLoading')
        // 现在 axios 会自动对 参数进行格式化 
    config = tokenHandler(config)
    cancelRequest(store, config)
    return config
}, error => {
    store.dispatch('hideLoading')
    return Promise.reject(error);
})

service.interceptors.response.use(response => {
    // console.log(process.env)
    store.dispatch('hideLoading')
        // 数据转换器

    responseMsgInterceptorHandle(response)
    return response;
}, error => {
    store.dispatch('hideLoading')
    timeout(error)
    responseMsgInterceptorHandle(error.response)
    return Promise.reject(error.response);
})

export default service