import axios from 'axios'
const CancelToken = axios.CancelToken;
export default function cancelRequest(store, config) {
    //cancel 白名单 /auth/refresh
    // console.log(config.url)
    let cancelWhiteList = ['/user/refreshToken']
    if (_.indexOf(cancelWhiteList, config.url) === -1) {
        config.cancelToken = new CancelToken((cancel) => {
            store.dispatch('storeAxios', cancel)
        })
    }
    return config
}