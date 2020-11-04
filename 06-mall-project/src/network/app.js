import { request } from './request'

function init() {
    return request({
        url: '/app/init.json'
    })
}

export default { init }