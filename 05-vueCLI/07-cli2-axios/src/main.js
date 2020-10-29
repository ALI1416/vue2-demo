import Vue from 'vue'
import App from './App'
// 导入axios
import axios from 'axios'
// 导入自定义网络请求
import { httpbin } from './netword/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 使用npm install --save axios安装axios
// axios
// 请求
// axios(config)
// axios(url[, config])
// 请求方法的别名
// axios.request(config)
// axios.get(url[, config) 
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.post(url[, data[, config])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config])
// 并发，分离结果
// axios.all(iterable)
// axios.spread(callback)
// 实例
// axios.create([config])

/* 全局配置axios.defaults */
// axios.defaults.timeout=5000
// axios.defaults.baseURL='http://httpbin.org'


// axios发送get请求1
axios({
  // 使用对象配置请求信息
  url: 'http://httpbin.org/get',
  // params可以传递get参数，自动拼接在网站后面
  params: {
    a: '1',
    b: '2'
  },
  // data无效，get无法传递
  // data: {
  //   c: '3',
  //   d: '4'
  // }
  // 支持Promise语法
}).then(res => {
  console.log('axios发送get请求1', res);
})

// axios发送get请求2
axios('http://httpbin.org/get').then(res => {
  console.log('axios发送get请求2', res);
})

// axios发送post请求
axios({
  url: 'http://httpbin.org/post',
  // 发送post请求
  method: 'post',
  params: {
    a: '1',
    b: '2'
  },
  // post可以传递data
  data: {
    c: '3',
    d: '4'
  }
}).then(res => {
  console.log('axios发送post请求', res);
})

// axios.post发送post请求
axios.post('http://httpbin.org/post', {
  // 第二个参数传递data
  a: '1',
  b: '2'
}).then(res => {
  console.log('axios.post发送post请求', res);
})

// axios.all并发请求
axios.all([
  axios('http://httpbin.org/get'),
  axios.post('http://httpbin.org/post', {
    a: '1',
    b: '2'
  })]).then(res => {
    console.log('axios.all并发请求', res);
  })

// axios.all并发请求，使用axios.spread分离结果
axios.all([
  axios('http://httpbin.org/get'),
  axios.post('http://httpbin.org/post', {
    a: '1',
    b: '2'
  })]).then(axios.spread((res1, res2) => {
    console.log('axios.all并发请求，使用axios.spread分离结果', res1, res2);
  }))

// 自定义网络请求
httpbin({
  url: '/get'
}).then(res => {
  console.log('自定义网络请求ok', res);
}).catch(err => {
  console.log('自定义网络请求err', err);
})
