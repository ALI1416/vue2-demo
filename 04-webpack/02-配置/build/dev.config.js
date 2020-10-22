/* 开发环境配置 */

const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

// 配置文件合并
module.exports = webpackMerge.merge(baseConfig, {
    // 优化
    optimization: {
        // 代码压缩
        minimize: false
    },
    // 服务器，需要webpack-cli@3
    // npm install --save-dev webpack-dev-server 
    devServer: {
        // 端口号，默认8080
        port: 80,
        // 要服务的文件夹
        contentBase: './dist',
        // 实时监听
        inline: true,
    }
})