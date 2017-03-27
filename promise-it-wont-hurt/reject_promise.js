'use strict';

var promise = new Promise (function (fulfill, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});

function onReject(err) {
  console.log(err.message);
}

promise.then(null, onReject);
