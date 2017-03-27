'use strict';

var promise = first();

promise.then(function (result) {
  return second(result);
}).then(console.log);
