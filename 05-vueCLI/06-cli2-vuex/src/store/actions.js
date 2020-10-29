export default {
    // 异步操作，参数是context相当于$store
    asyncAction(context) {
        setTimeout(() => {
            // 使用context.commit执行mutations里的同步操作
            context.commit('syncMutation');
        }, 1000)
    },
    // 函数回调，第二个参数可以传递数值
    asyncAction1(context, payload) {
        setTimeout(() => {
            context.commit('syncMutation');
            console.log(payload.message);
            // 调用对方的成功函数
            payload.success('asyncAction1返回值');
        }, 1000)
    },
    // Promise回调
    asyncAction2(context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('syncMutation');
                console.log(payload);
                resolve('asyncAction2返回值');
            }, 1000)
        })
    },
}