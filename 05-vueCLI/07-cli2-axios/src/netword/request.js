/* 封装网络请求实例 */

import axios from 'axios'

export function httpbin(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://httpbin.org',
        timeout: 8000
    })

    // request拦截的作用：
    // 1、config有信息不符合服务器要求
    // 2、网络请求时，界面显示请求图标
    // 3、携带一些信息，比如token

    // 拦截器：request发送use(配置，发送失败信息)
    instance.interceptors.request.use(config => {
        console.log('request发送成功拦截', config);
        // 拦截后还要返回
        return config;
    }, err => {
        console.log('request发送失败拦截', err);
    })
    // 拦截器：response接收use(结果，返回的错误信息)
    instance.interceptors.response.use(res => {
        console.log('response接收成功拦截', res);
        // 拦截后还要返回（只返回data就可以，其他的是axios的信息）
        return res.data;
    }, err => {
        console.log('response接收错误拦截', err);
    })
    // 返回Promise
    return instance(config);
}