/* 正式环境配置 */

const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

// 配置文件合并
module.exports = webpackMerge.merge(baseConfig, {
    // 优化
    optimization: {
        // 代码压缩
        minimize: true
    },
})