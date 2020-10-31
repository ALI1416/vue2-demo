/* vue配置 */
module.exports = {
    /* webpack配置 */
    configureWebpack: {
        // 解决方案
        resolve: {
            // 别名
            alias: {
                // 默认已配置
                // '@': 'src',
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                // 不需要配置，通过$this.router即可拿到
                // 'router': '@/router',
                // 不需要配置，通过$this.store即可拿到
                // 'store': '@/store',
                'views': '@/views',
            }
        }
    }
}