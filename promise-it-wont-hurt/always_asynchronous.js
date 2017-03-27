'use strict';

var promise = new Promise(function(resolve, reject) {
  resolve('PROMISE VALUE');

});

promise.then(console.log);

console.log('MAIN PROGRAM');
