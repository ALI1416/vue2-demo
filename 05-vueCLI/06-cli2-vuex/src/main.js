import Vue from 'vue'
import App from './App'
// 导入插件
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册插件，相当于Vue.prototype.$store=store
  store,
  render: h => h(App)
})
