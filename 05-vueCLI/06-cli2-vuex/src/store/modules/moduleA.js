export default {
    state: {
        name: 'moduleA.name'
    },
    getters: {
        name2(state) {
            // state是本模块内的state
            return state.name + '222';
        },
        name3(state, getters) {
            // getters是本模块内的getters
            return getters.name2 + '333';
        },
        name4(state, getters, rootState) {
            // rootState是根的state
            return getters.name3 + rootState.counter;
        },
    },
    mutations: {
        // 不要和root内mutation同名
        changeName(state, payload) {
            // state是本模块内的state
            state.name = payload;
        }
    },
    actions: {
        asyncActionModule(context) {
            setTimeout(() => {
                // context是本模块内
                // 使用context.commit只提交本模块内的mutations
                context.commit('changeName', 'ActionModule');
            }, 1000)
        }
    },
    // 一般不在模块中嵌套模块
    // modules: {}
}