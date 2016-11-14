var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var stylus = require('stylus');
var crypto = require('crypto');
var fs = require('fs');
var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'public')));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));


app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.get('/home', function (req, res) {
  // res.end('Hello World!');
  res.render('index', {date: new Date().toDateString()});
});

app.get('/search', function (req, res) {
  // var obj = JSON.stringify(req.query);
  var obj = req.query;
  res.send(obj);
});

app.get('/books', function (req, res) {
  var book = fs.readFile(process.argv[3], function (err, data) {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(data));
  });
});

app.post('/form', function (req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.put('/message/:id', function (req, res) {
  var id = req.params.id;
  var date = crypto.createHash("sha1").update(new Date().toDateString() + id).digest("hex");
  res.send(date);
});

// app.put('/message/:id', function (req, res) {
//   var id = req.params.id;
//   var str = crypto.createHash('sha1').update(new Date().toDateString().toString() + id).digest('hex');
//   res.send(str);
// });

app.listen(process.argv[2]);
