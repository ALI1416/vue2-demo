// vuex相当于全局单例对象，相当于prototype(原型)，他结合了vue的动态响应
// 一般在src下创建store(仓库)文件夹，来管理vuex

/* 安装vue-devtools方法 */
// 1、去官网https://github.com/vuejs/vue-devtools 下载zip包（注意：一定要是master分支https://github.com/vuejs/vue-devtools/tree/master）
// 2、解压后安装项目所需要的npm包 npm install
// 3、编译项目文件 npm run build
// 4、游览器进入扩展程序页面，点击“加载已解压的扩展程序...”按钮（需要勾选“开发者模式”）
// 5、选择 vue-devtools\shells\chrome文件夹。（已上传到网盘https://lanzous.com/iAszSht6x2h）

/* 调试方法 */
// 1、打开控制台，找到Vue
// 2、有4个选项，分别是组件、Vuex、事件、强制刷新

/* Vuex */
// 直接使用$store.state.counter--更新变量，vue-devtools无法监听到state里变量的变化
// 需要使用mutations或actions去间接修改state里的变量
// 如果有异步操作要使用actions

import Vue from 'vue'
import Vuex from 'vuex'
// 导入mutations常量
import * as types from './mutations-types'

// 1、安装插件
Vue.use(Vuex)

// 2、创建对象，需要调用Vuex.Store方法
const store = new Vuex.Store({
    // 状态（保存变量）
    state: {
        counter: 100,
        profile: {
            name: 'ck',
            year: '1998',
            gender: 'man'
        }
    },
    // 变化（同步操作）
    mutations: {
        // 可以使用mutations来定义方法名，方法名可以使用['方法名']来定义
        // 会自动传入参数state
        [types.add](state) {
            state.counter++;
        },
        sub(state) {
            state.counter--;
        },
        // 第二个参数是传递过来的
        addn(state, n) {
            state.counter += n;
        },
        // 携带参数的对象类型提交，第二个参数是payload(负载)
        subn(state, payload) {
            state.counter -= payload.n;
        },
        // Vuex只能对已经初始化过的属性进行监听，来做到响应式
        // 新增属性
        addProfileInfo(state) {
            // 使用以下方法无法做到响应式
            // state.profile['address'] = '山东济宁'
            // 需要换成Vue.set，可以更新数组或对象
            // 数组（要修改的数组，下标值，值）
            // 对象（要修改的数组，对象名，值）
            Vue.set(state.profile, 'address', '山东济宁')
        },
        // 删除属性
        delProfileInfo(state) {
            // 使用以下方法无法做到响应式
            // delete state.profile.year
            // 需要换成Vue.delete
            // 数组（要修改的数组，下标值）
            // 对象（要修改的数组，对象名）
            Vue.delete(state.profile, 'year')
        },
    },
    // 行动（异步操作）
    actions: {

    },
    // 相当于组件中的computed计算属性
    getters: {
        // 会自动传入参数state
        counterx2(state) {
            return state.counter * 2
        },
        // 还可以传入第二个参数getters
        counterx4(state, getters) {
            return getters.counterx2 * 2
        },
        // 可以用函数来接收传来的参数
        counterxn(state) {
            // return function (n) {
            //     return state.counter * n
            // }
            return n => {
                return state.counter * n
            }
        }
    },
    // 
    modules: {

    }
})

// 3、导出
export default store