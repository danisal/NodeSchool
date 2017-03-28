'use strict';

let arr = process.argv.slice(2);
let min = Math.min(...arr);
console.log(`The minimum of [${arr}] is ${min}`);
