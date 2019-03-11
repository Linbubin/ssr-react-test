import express from 'express';
import Home from '../container/Home';
import {renderToString} from 'react-dom/server';
import React from 'react';

const app = express();
app.use(express.static('public'));

const content = renderToString(<Home />);
app.get('/', function (req, res) {
  res.send(`
    <html>
      <head>
        <title>init ssr</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src="index.js"></script>
      </body>
    </html>
  `);
});

app.get('/xx', (req, res) => {
  // res.redirect(301, 'http://example.com');
  res.json({a:1,b:2})
})
app.get('/yy', (req, res) => {
  // res.redirect('http://example.com');
  res.json({a:1,b:2})
})

app.listen(3300, function () {
  console.log('Example app listening on port 3300!');
});