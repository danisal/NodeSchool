'use strict';

let promise = new Promise(function(resolve, reject) {
  resolve('MANHATTAN');
});

function attachTitle(argument) {
  return ['DR. ', argument].join('');
}

promise.then(attachTitle).then(console.log);
