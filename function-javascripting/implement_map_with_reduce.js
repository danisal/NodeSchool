module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce (function (accum, currVal, currIndex, arr) {
    accum.push(fn.call(thisArg, currVal, currIndex, arr));
    return accum;
  }, []);
};
