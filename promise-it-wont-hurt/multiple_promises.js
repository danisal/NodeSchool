'use strict';

function all(first, second) {
  return new Promise(function(resolve, reject) {
    var counter = 0;
    var arr = [];

    first.then(function (value) {
      arr[0] = value;
      counter++;

      if (counter >= 2) {
        resolve(arr)
      }
    });
    second.then(function (value) {
      arr[1] = value;
      counter++;

      if (counter >= 2) {
        resolve(arr)
      }
    });

  });
}

all(getPromise1(), getPromise2()).then(console.log);
