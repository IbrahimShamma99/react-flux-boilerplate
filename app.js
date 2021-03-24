var express = require('express');
var path = require('path');
var expressStaticGzip = require('express-static-gzip');
var url = require('url');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var compression = require('compression'); //import to express app

var app = express();
const cwd = path.join(__dirname, '/build');
const root_cwd = path.join(__dirname, '/');

app.use(compression()); //add this as the 1st middleware
// app.use(express.static(cwd));

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  immutable: true,
  index: false,
  // maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

app.use(express.static(cwd));

const PUBLIC_PATH = path.resolve(__dirname, 'public');

app.use(express.static(path.join(PUBLIC_PATH)));
// app.use(express.static(path.join(process.env.PUBLIC_URL)));

// console.log("PUBLIC WAITING",process.env.PUBLIC_URL)
// console.log("PUBLIC PATH",PUBLIC_PATH)

app.get('*', function(req, res) {
  // var fullUrl = req.protocol + '://' + req.get('host') + req.path;
  // console.log('LBC', url.parse(req.url).pathname);
  // console.log('fullUrl', fullUrl);
  // res.sendFile(path.join(__dirname, '/build', 'index.html'));
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
  // res.render(path.join(__dirname, '/build', 'index.html'));
  //res.sendFile('/build/index.html' , { root : __dirname});
  // res.sendFile(path.resolve(__dirname +'/build/index.html'));
});
//app.use('/', router);
module.exports = app;
