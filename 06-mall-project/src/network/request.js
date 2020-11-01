import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: '/json',
    })

    // instance.interceptors.request.use(config => {
    //     console.log('request发送成功拦截', config);
    //     return config;
    // }, err => {
    //     console.log('request发送失败拦截', err);
    // })

    instance.interceptors.response.use(res => {
        // console.log('response接收成功拦截', res);
        return res.data;
    }, err => {
        // console.log('response接收错误拦截', err);
    })

    return instance(config);
}