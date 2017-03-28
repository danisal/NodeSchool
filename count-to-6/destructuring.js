'use strict';

let userArr = process.argv.slice(2);
let obj = {};
[ , obj.username, obj.email] = userArr;

console.log(obj);
