/* 更改url而不刷新页面，有2种方法 */
/* 1、使用location.hash */
// hash是网站http://localhost:8080/#/ 井号后面的内容
// 在浏览器控制台中输入location.hash='aaa'
// url变成了http://localhost:8080/#/aaa 但是网页没有刷新
/* 2、使用HTML5的history.pushState或history.replaceState */
// 在浏览器控制台中输入history.pushState({},'','bbb')
// url变成了http://localhost:8080/bbb 但是网页没有刷新
// history.pushState可以接收3个参数，第一个是对象data，第二个是字符串title，第三个是字符串url
// 他会把push进去的每个内容存到栈中，可以back或forward或go查看历史记录
// history.back()后退，history.forward()前进，history.go(n)n为正数时前进，为负数是时后退，为0时刷新
// 在浏览器控制台中输入history.replaceState({},'','ccc')
// url变成了http://localhost:8080/ccc 但是网页没有刷新
// 和push不同的是，他无法查看历史记录了


/* 配置路由 */
// 手动安装路由需要npm install --save vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 普通加载，全部打包进app.js
// import A from '../components/A'
// import B from '../components/B'
// import C from '../components/C'

// 懒加载，每个组件单独打包进1个js文件
const A = () => import('../components/A')
const A_A = () => import('../components/A_A')
const A_B = () => import('../components/A_B')
const B = () => import('../components/B')
const C = () => import('../components/C')
const D = () => import('../components/D')

// 1、通过Vue.use()安装Router插件
Vue.use(Router)

// 2、配置路由和组件之间的映射关系
const routes = [
  {
    // 默认路径（首页）可以填/或空
    path: '/',
    // 重定向（使用component网页中的url不会变）
    redirect: '/A'
  },
  {
    // 路径，必须加上/
    path: '/A',
    // 对应的组件
    component: A,
    // 嵌套路由
    children: [
      {
        // 默认子路径可以填/或空
        path: '',
        redirect: 'A_A'
      },
      {
        // 子路径，不能加/，也不能加父组件的路径
        path: 'A_A',
        component: A_A
      },
      {
        path: 'A_B',
        component: A_B
      },
    ]
  },
  {
    path: '/B',
    component: B
  },
  {
    // 动态路由params要加上:参数名
    path: '/C/:idC',
    component: C
  },
  {
    // 动态路由pquery什么都不用加
    path: '/D',
    component: D
  }
]

// 2、创建Router对象
const router = new Router({
  routes,
  // url模式默认是hash（带#）
  // 改为history后不带#（推荐）
  mode: 'history',
  // 统一修改active-class，默认是router-link-active
  // linkActiveClass: 'active'
})

// 4、导出router
export default router