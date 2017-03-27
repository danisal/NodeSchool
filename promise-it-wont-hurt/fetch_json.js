'use strict';

const http = require('q-io/http');

http.read('http://localhost:1337')
.then(function (json) {
  console.log(JSON.parse(json));
})
.catch(console.log)
.done()
