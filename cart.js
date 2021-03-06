const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    this.cart.push(car)
    this.total += car.price;
  },

  removeFromCart: function(index, value) {
    this.cart.splice(index, 1)
    this.total -= value
  },
  
  checkout: function() {
    this.cart = []
    this.total = 0
  }
};