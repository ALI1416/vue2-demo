import { request } from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/1.json'
    })
}