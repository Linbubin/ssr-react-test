// 服务器端
// require('path');// path不会被打包进去,只是node自带的语法
// 浏览器端(客户端)
// require('path');// path会被当成一个第三方库打包进bund.js里面
const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js?$/,// 检测js文件,如果是就用babel-loader来处理
            loader: 'babel-loader',
            exclude: /node_modules/, // 排除掉 node_modules里面的文件
            options: {
                presets: ['react', 'stage-0', ['env',{
                    targets: {
                        browsers: ['last 2 versions']
                    }
                }]]// 配置一些编译规则 react,stage-0,es2015, es2017都可以  env是指如何根据环境进行适配,兼容主流浏览器最后的两个版本
            }
        }]
    }
}

// npm install  --save babel-loader babel-core
// npm install --save babel-preset-react --save
// npm install --save babel-preset-stage-0 babel-preset-env babel-preset-react --save
// npm install --save webpack-node-externals