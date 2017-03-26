function countWords(inputWords) {
  return inputWords.reduce(function (accumulator, currentValue) {
    // console.info(accumulator[currentValue] = ++accumulator[currentValue] || 1);
    accumulator[currentValue] = ++accumulator[currentValue] || 1;
    return accumulator;
  }, {});
}

module.exports = countWords;
