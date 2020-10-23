import Vue from 'vue'
import App from './App.vue'

// 构建过程中提示信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // $mount('#app')等同于el:'#app'挂载#app
}).$mount('#app')
