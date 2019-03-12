import express from 'express';
import { render } from './util';
const app = express();
app.use(express.static('public'));

app.get('*', function (req, res) {
  res.send(render(req));
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