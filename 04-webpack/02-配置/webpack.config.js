// 导入node的全局模块path
const path = require('path');

// 配置以下模块可以直接使用webpack进行打包
module.exports = {
    // 入口文件
    entry: './src/main.js',
    // 出口文件
    output: {
        // 路径，必须是绝对路径
        // 使用了path的resolve函数对__dirname当前项目路径和dist目标文件夹名进行拼接
        path: path.resolve(__dirname, 'dist'),
        // 文件名
        filename: 'bundle.js'
    }
}