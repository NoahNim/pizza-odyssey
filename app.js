// JS file for pizza website

// constructor function for pizza shops
function PizzaShop(place, minPizza, maxPizza, minDelivery, maxDelivery){
  this.place = place;
  this.pizzaSold = 0;
  this.deliveries = 0;
  this.drivers = 0;
  this.minPizza = minPizza;
  this.maxPizza = maxPizza;
  this.minDelivery = minDelivery;
  this.maxDelivery = maxDelivery;
}

PizzaShop.prototype.setPizzaSold = function () {
  var min = this.minPizza;
  var max = this.maxPizza;
  var pizzasSold = []
  for(var i = 0; i < min.length; i++){
    pizzasSold.push(Math.floor(Math.random() * (max[i] - min[i] + 1)) + min[i]);
  }
  this.pizzaSold = pizzasSold;
};

PizzaShop.prototype.setDeliveries = function () {
  var min = this.minDelivery;
  var max = this.maxDelivery;
  var deliveriesMade = []
  for(var i = 0; i < min.length; i++){
    deliveriesMade.push(Math.floor(Math.random() * (max[i] - min[i] + 1)) + min[i]);
  }
  this.deliveries = deliveriesMade;
};

PizzaShop.prototype.setDrivers = function () {
  var min = this.pizzaSold;
  var max = this.deliveries;
  var deliveryDrivers = [];
  for(var i = 0; i < min.length; i++){
    deliveryDrivers.push(Math.floor(Math.random() * (max[i] - min[i] + 1)) + min[i]);
  }
  this.drivers = deliveryDrivers;
};

// var tbEl = document.createElement('table');
// PizzaShop.prototype.tableRowMaker = function(id, inputArray) {
//   id = document.getElementById('');
//   var trEl = document.createElement('tr');
//   for(var i = 0; i < inputArray.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = inputArray[i];
//     trEl.appendChild(tdEl);
//   }
//   tbEl.appendChild(trEl);
//   id.appendChild(tbEl);
// }
// document.body.appendChild(tbEl)

var ballardMinPizza = [0, 0, 2, 15, 12, 5];
var ballardMaxPizza = [4, 7, 15, 35, 31, 20];
var ballardMinDelivery = [0, 0, 1, 3, 5, 6];
var ballardMaxDelivery = [4, 4, 4, 8, 12, 11];

var ballard = new PizzaShop('Ballard', ballardMinPizza, ballardMaxPizza, ballardMinDelivery, ballardMaxDelivery)

var ballardRowOne = ['Time', 'Pizzas Sold', 'Pizzas Delivered', 'Drivers Recomennded']
var ballardRowTwo = ['8am-11pm', ballard.pizzaSold, ballard.deliveries, ballard.drivers]

ballard.setPizzaSold();
ballard.setDeliveries();
ballard.setDrivers();
ballard.tableRowMaker('ballardtable', ballardRowOne)
ballard.tableRowMaker('ballardtable', ballardRowTwo)
