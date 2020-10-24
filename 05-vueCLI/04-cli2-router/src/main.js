import Vue from 'vue'
import App from './App'
// 当导入的是文件夹时，可以不写文件名，会自动导入index文件
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 挂载路由
  router,
  render: h => h(App)
})
