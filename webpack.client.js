const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
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