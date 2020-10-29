// 导入mutations常量
import * as types from './mutations-types'
import Vue from 'vue'

export default {
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
    // mutations使用异步请求时，vue-tools可能无法监听
    asyncMutation(state) {
        setTimeout(() => {
            // 页面显示正常，vue-tools显示错误
            state.async += 'Mutation ';
        }, 1000)
    },
    // 同步操作，被asyncAction调用
    syncMutation(state) {
        state.async += 'Action ';
    },
}