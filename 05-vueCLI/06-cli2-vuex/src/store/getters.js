export default {
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
    },
}