function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    // console.log(obj);
    // console.log(Object.hasOwnProperty.call(obj, 'quack'));
    return Object.hasOwnProperty.call(obj, 'quack');
  }).length;
}

module.exports = duckCount;
