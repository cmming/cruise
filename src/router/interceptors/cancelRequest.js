import store from '@/store'

export default function cancelRequest() {
    // const cancelToken = axios.CancelToken
    // console.log(store)
    // // store.getters.source.cancel&&store.getters.source.cancel()
    // store.getters.source = cancelToken.source()
    store.getters.axiosPromiseArr.forEach((e, i) => {
        typeof(e) === 'function' && e()
        store.dispatch('storeAxios', i)
        store.dispatch('hideLoading')
    });

    // store.getters.axiosPromiseArr =[]
    // fixed 清空 否则会缓存所有的请求 造成页面卡顿
    store.dispatch('initAxios')
}