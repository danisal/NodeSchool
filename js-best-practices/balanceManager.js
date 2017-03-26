var vendingMachine = require('./vendingMachine');

var balance = 0;

module.exports = {
  decreaseBalance: function(amount){
    if(!this.canAfford(amount)){
        throw new Error('Insufficient balance');
    }
    balance -= amount;
  },
  getBalance: function(){
    return balance;
  },
  increaseBalance: function(amount){
    balance += amount;
  },
  canAfford: function(amount){
    return amount <= balance;
  }
};
