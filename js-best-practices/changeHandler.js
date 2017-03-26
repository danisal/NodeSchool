// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

var coins = {
  'q': 25,
  'd': 10,
  'n': 5,
  'p': 1
};

module.exports = {
  convertToChange: function (amount) {
    var change = [];
    for (var i in coins) {
      var coinValue = coins[i];

      while (amount >= coinValue) {
        change.push(i);
        amount -= coinValue;
      }
    }
    return change;
  },  
  getAmount: function(coinType) {
    if (!(coinType in coins)) {
      throw new Error('Unrecognized coin ' + coinType);
    }
    return coins[coinType];
  }
};
