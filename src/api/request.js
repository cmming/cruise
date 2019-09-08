import axios from 'axios'
import store from '@/store/index'
import { responseMsgInterceptorHandle, tokenHandler, timeout, cancelRequest } from './interceptors/index'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: 15000, // request timeout
})

service.interceptors.request.use(config => {
    store.dispatch('showLoading')
    config = tokenHandler(config)
    cancelRequest(store, config)
    return config
}, error => {
    store.dispatch('hideLoading')
    return Promise.reject(error);
})

service.interceptors.response.use(response => {
    store.dispatch('hideLoading')
    responseMsgInterceptorHandle(response)
    return response;
}, error => {
    store.dispatch('hideLoading')
    timeout(error)
    responseMsgInterceptorHandle(error.response)
    return Promise.reject(error.response);
})

export default service