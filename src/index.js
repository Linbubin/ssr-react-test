const express = require('express');
const app = express();
const Home = require('./container/Home');

app.get('/', function (req, res) {
  res.send(
      `<html>
        <head>
            <title>111</title>
        </head>
        <body>
            <div>123</div>
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