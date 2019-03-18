# 服务端渲染代码
初步配置完成 ———— 2019-03-09 23:29:11
增加npm-run-all 来优化开发流程 ———— 2019-03-10 23:09:29


# 说明
* 服务器端运行React代码渲染出HTML
* 发送HTML给浏览器
* 浏览器接收到内容展示
* 浏览器加载JS文件
* JS的React代码在浏览器端重新执行
* JS的React代码接管页面操作
* 最终渲染

# 差异
* componentDidMount 在服务器端不会执行

# 流程
* 运行`http://localhost:3300/`, 被 server/index 的get*获取,从而render相应代码.
* render中是由react-router-dom和redux包裹的react代码
* 根据router会到Home/index里面加载内容
* 由于服务器端不会执行`componentDidMount`生命周期函数,所以 list始终都保持初始值.不会加载其他内容.
* 又因为render出的HTML代码中包含`build/bundle.js`

* 所以开始加载client/index.js
* 同理,因为`componentDidMount`能在客户端执行,所以会去请求数据,填充redux
* 页面加载数据

* 两者差异可以已肉看查看和查看代码来解决