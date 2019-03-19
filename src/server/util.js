import routes from '../Routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import getStore from '../store/index';

export const render = (req) => {

  const store = getStore();

  // 如果在这里能拿到异步数据,填充到store中,就可以解决server端渲染问题
  // store里填充什么,需要根据用户访问的路径,获取对应的组件,然后获取组件中的函数的返回值,才能填充
  const  matchRoutes = [];
  routes.some(route => {
    const match = matchPath(req.path, route);
    if(match){
      matchRoutes.push(route)
    }
    
      
    // return match
  })
  console.log(matchRoutes)

  // route.loadData(match)
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
          {routes.map(route => (
            <Route {...route} />
          ))}
      </StaticRouter>
    </Provider>
  ))
  return `
    <html>
      <head>
        <title>init ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src="index.js"></script>
      </body>
    </html>
  `
}