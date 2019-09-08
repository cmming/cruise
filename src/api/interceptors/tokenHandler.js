import storage from '@/utils/storage'


export default function tokenHandler(config) {
    config.headers = {...config.headers,Authorization:storage.get('token')}

    return config
}