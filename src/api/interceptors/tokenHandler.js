import storage from '@/utils/storage'


export default function tokenHandler(config) {
    config.headers = {...config.headers,Authorization:storage.get('uamToken')}

    return config
}