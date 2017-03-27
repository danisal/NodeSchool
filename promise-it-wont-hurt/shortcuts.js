'use strict';

// Example 1
let promise = new Promise(function(resolve, reject) {
  reject(new Error('Damm an error'));
});
promise.catch(function (err) {
  console.log(err.message)
});


// Example 2
let promise1 = new Promise.resolve('No error here! :)');
promise1.then(function (value) {
  console.log(value)
});


// Example 3
let promise2 = new Promise.reject(new Error('Found an error here :('));
promise2.then(function (err) {
  console.log(err.message)
});
