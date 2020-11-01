import { request } from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/banner.json'
    })
}