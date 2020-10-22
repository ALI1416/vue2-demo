/* 原始配置，在最外层 */

// 使用webpack打包需要使用webpack和webpack-cli
// 使用npm install --save-dev webpack@4和npm install --save-dev webpack-cli@3进行安装
// 合并写法npm install --save-dev webpack@4 webpack-cli@3

// 导入node的全局模块path
const path = require('path');
// 导入vue-loader插件，vue-loader大于15需要
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 导入webpack插件
const webpack = require('webpack');
// 导入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // 如果使用自动生成html，则不需要这个
        // publicPath: 'dist/'
    },
    // 优化
    optimization: {
        // 代码压缩
        minimize: false
    },
    // 模式
    module: {
        // 规则
        rules: [
            // 要加载和解析css文件，需要使用css-loader和style-loader
            // 其中css-loader负责加载文件、style-loader负责解析文件到DOM
            // 安装 npm install --save-dev css-loader style-loader
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
            // 安装 npm install --save-dev url-loader file-loader
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        // 选项
                        options: {
                            // 图片限制，推荐8192（8kb），小于limit时，会把图片转换为base64格式
                            // 如果大于，会使用file-loader进行加载，会把文件进行打包到dist
                            // 打包到dist文件会找不到，需要在output中加入publicPath: 'dist/'
                            limit: 819,
                            // 如果不对文件进行重命名，会生成32位的哈希值
                            // 对图片文件进行重命名[name]原文件名，[hash:8]取出8位哈希值，[ext]文件后缀
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            // ES6转ES5（许多浏览器不支持ES6语法，所以需要转为大多数浏览器都支持的ES5语法）
            // 安装 npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
            // babel-loader需要7版的才能使用
            // babel-loader版本过低，需要webpack@4才能生效
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_compoents)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // 转为ES5
                            presets: ['es2015']
                        }
                    }
                ]
            },
            // 安装vue
            // npm install --save vue vue-cli
            // 安装vue解析器
            // npm install --save-dev vue-loader vue-template-compiler
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }

        ]
    },
    // 解决问题
    resolve: {
        // 忽略拓展名
        extensions: ['.js', '.css', '.vue'],
        // 别名
        alias: {
            // vue默认使用runtime-only进行编译，但是代码中不能有template，需要切换到runtime-complier才可
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // 插件
    plugins: [
        // vue-loader插件
        new VueLoaderPlugin(),
        // 添加版权声明，在生成js文件的首部添加
        new webpack.BannerPlugin('版权声明'),
        // html-webpack-plugin插件，可以把html文件打包进dist目录
        // npm install --save-dev html-webpack-plugin
        new HtmlWebpackPlugin({
            // 插入body内容，不需要写script
            template: 'index2.html'
        }),
    ],
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
}