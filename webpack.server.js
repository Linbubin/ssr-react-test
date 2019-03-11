// 服务器端
// require('path');// path不会被打包进去,只是node自带的语法
// 浏览器端(客户端)
// require('path');// path会被当成一个第三方库打包进bund.js里面
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
};

module.exports = merge(serverConfig, baseConfig);

// npm install  --save babel-loader babel-core
// npm install --save babel-preset-react --save
// npm install --save babel-preset-stage-0 babel-preset-env babel-preset-react --save
// npm install --save webpack-node-externals