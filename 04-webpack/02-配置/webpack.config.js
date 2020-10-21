// 使用webpack打包需要使用webpack和webpack-cli
// 使用npm install --save-dev webpack和npm install --save-dev webpack-cli进行安装

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
        filename: 'bundle.js',
        // 所有涉及到url的文件，在文件名前都会加上dist/
        publicPath: 'dist/'
    },
    // 模式
    module: {
        // 规则
        rules: [
            // 要加载和解析css文件，需要使用css-loader和style-loader
            // 其中css-loader负责加载文件、style-loader负责解析文件到DOM
            // 使用npm install --save-dev css-loader和npm install --save-dev style-loader进行安装
            {
                // 正则表达式，匹配以.css结尾的文件
                test: /\.css$/,
                // 对符合条件的进行导入，从后向前加载。先加载css，再解析css
                use: ['style-loader', 'css-loader']
            },
            // 解析less需要less-loader和less
            // 使用npm install --save-dev less-loader less
            {
                test: /\.less$/,
                // 可以使用数组里面套对象
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            // 解析url文件需要url-loader和file-loader
            // 使用npm install --save-dev url-loader和npm install --save-dev file-loader
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        // 选项
                        options: {
                            // 图片限制，默认8192（8kb），小于limit时，会把图片转换为base64格式
                            // 如果大于，会使用file-loader进行加载，会把文件进行打包到dist
                            // 打包到dist文件会找不到，需要在output中加入publicPath: 'dist/'
                            limit: 819,
                            // 如果不对文件进行重命名，会生成32位的哈希值
                            // 对图片文件进行重命名[name]原文件名，[hash:8]取出8位哈希值，[ext]文件后缀
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}