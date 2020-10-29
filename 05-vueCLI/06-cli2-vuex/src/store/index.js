/* 抽取getters,mutations,actions到单独文件，抽取modules到单独文件夹 */

import Vue from 'vue'
import Vuex from 'vuex'
// 导入被抽取的getters,mutations,actions,modules
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

// 1、安装插件
Vue.use(Vuex)

/* 在本文件内抽取state */
const state = {
    counter: 100,
    profile: {
        name: 'ck',
        year: '1998',
        gender: 'man'
    },
    async: ''
}

// 2、创建对象，需要调用Vuex.Store方法
const store = new Vuex.Store({
    // 状态（保存变量）
    state,
    // 变化（同步操作）
    mutations,
    // 行动（异步操作）
    actions,
    // 相当于组件中的computed计算属性
    getters,
    // 模块，可以划分为小的模块，模块中可以包含state/mutations/getters/actions/modules
    modules: {
        a: moduleA
    }
})

// 3、导出
export default store