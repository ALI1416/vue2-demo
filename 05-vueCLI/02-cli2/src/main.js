import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// eslint会强制要求代码格式
// eslint规则：以下注释会忽略规则
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // App传过来时，不存在template。已经由vue-template-compiler处理成render了
  render: h => h(App),// eslint规则：对象结尾不能有逗号
  // render: h => h(App)等价于template: '<App/>'
  // h => h(App)等价于
  // function(createElement) {
  //   // createElement会替换#app
  //   // 普通用法
  //   // return createElement('标签名','标签的属性',['内容',..]);// 内容中还可以createElement，嵌套标签
  //   // 传入组件
  //   return createElement(App);
  // }
  // 使用runtime-complier解析步骤是template-ast(abstract syntax tree 抽象语法树)-render-vdom(virtual dom 虚拟dom)-ui
  // 使用runtime-only解析步骤是render-vdom-ui
  // 很明显，使用runtime-only性能更高，代码更少
});// eslint规则：一行结尾不能有分号
function add(num1, num2) {// eslint规则：函数名后要加一个空格
  console.log(num1 + num2);
}
console.log(add(1, 3));// eslint规则：定义的函数必须被调用
