'use strict';

function parsePromised (value) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.parse(value));
    } catch (e) {
      reject(e);
    }
  });
}

parsePromised(process.argv[2]).then(null, console.log)
