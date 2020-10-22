/* CommonJS导入 */
const { fa, fb } = require('./js/a')
fa();
fb();

/* ES6导入 */
import { a, b } from './js/b'
console.log(a);
console.log(b);

/* 导入css文件 */
require('./css/a.css')

/* 导入less文件 */
require('./css/b.less')

/* 使用vue，不加路径会到node_modules中去寻找 */
import Vue from 'vue'

/* vue基本使用 */
// 一般vue做的是单页面富应用SPA(single page web application)，即只有一个HTML页面，多个页面需要前端路由实现
// HTML页面一般不做修改，只在boby中写<div id="app"></did>
// new Vue({
//     el: '#app',
//     // 如果el和template都存在，template内容会替换掉#app的内容
//     template: `
//         <div>
//             {{msg}}
//         </div>
//     `,
//     data: {
//         msg: 'Hi Vue'
//     }
// })

/* 抽取template */
// const App = {
//     template: `
//         <div>
//             {{msg}}
//         </div>
//     `,
//     data() {
//         return {
//             msg: 'Hi Vue'
//         }
//     }
// }
// new Vue({
//     el: '#app',
//     template: '<App/>',
//     components: {
//         App
//     }
// })

/* 抽取template到文件 */
// 导入js文件
// import app from './vue/appjs'
// 换用vue文件，一般vue文件都是大写字母开头
import App from './vue/App.vue'
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})
