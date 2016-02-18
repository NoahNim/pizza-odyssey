// JS file for pizza website

// Arrays for each shops amount of pizzas and deliveries
var ballardMinPizza = [0, 0, 2, 15, 12, 5];
var ballardMaxPizza = [4, 7, 15, 35, 31, 20];
var ballardMinDelivery = [0, 0, 1, 3, 5, 6];
var ballardMaxDelivery = [4, 4, 4, 8, 12, 11];
var firstHillMinPizza = [1, 5, 2, 18, 1, 8];
var firstHillMaxPizza = [3, 9, 13, 32, 3, 20];
var firstHillMinDelivery = [1, 2, 1, 3, 5, 6];
var firstHillMaxDelivery = [7, 8, 6, 9, 12, 16];
var theIDMinPizza = [0, 0, 2, 10, 8, 0];
var theIDMaxPizza = [4, 7, 15, 26, 22, 2];
var theIDMinDelivery = [0, 0, 1, 4, 7, 2];
var theIDMaxDelivery = [4, 4, 4, 6, 15, 8];
var sluMinPizza = [0, 0, 5, 25, 22, 5];
var sluMaxPizza =[4, 7, 15, 39, 36, 21];
var sluMinDelivery = [0, 0, 0, 13, 5, 16];
var sluMaxDelivery = [4, 4, 4, 18, 22, 31];
var georgetownMinPizza = [2, 3, 1, 5, 22, 15];
var georgetownMaxPizza = [7, 8, 5, 13, 41, 20];
var georgetownMinDelivery = [3, 3, 1, 2, 15, 6];
var georgetownMaxDelivery = [5, 9, 4, 4, 42, 21];
var ravennaMinPizza = [0, 0, 2, 6, 4, 2];
var ravennaMaxPizza = [4, 7, 15, 9, 8, 4];
var ravennaMinDelivery = [0, 0, 1, 5, 2, 3];
var ravennaMaxDelivery = [4, 4, 4, 18, 5, 11];

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
  this.hoursOpen = ['8am-11am', '11am-2pm', '2pm-5pm', '5pm-8pm', '8pm-11pm', '11pm-2am']
}

// Pizzas Sold prototype
PizzaShop.prototype.setPizzaSold = function () {
  var min = this.minPizza;
  var max = this.maxPizza;
  var pizzasSold = []
  for(var i = 0; i < min.length; i++){
    pizzasSold.push(Math.floor(Math.random() * (max[i] - min[i] + 1)) + min[i]);
  }
  this.pizzaSold = pizzasSold;
};

// Deliveries prototype
PizzaShop.prototype.setDeliveries = function () {
  var min = this.minDelivery;
  var max = this.maxDelivery;
  var deliveriesMade = []
  for(var i = 0; i < min.length; i++){
    deliveriesMade.push(Math.floor(Math.random() * (max[i] - min[i] + 1)) + min[i]);
  }
  this.deliveries = deliveriesMade;
};

// Drivers prototype
PizzaShop.prototype.setDrivers = function () {
  var min = this.pizzaSold;
  var max = this.deliveries;
  var deliveryDrivers = [];
  for(var i = 0; i < min.length; i++){
    deliveryDrivers.push(Math.floor(Math.random() * (max[i] - min[i] + 1)) + min[i]);
  }
  this.drivers = deliveryDrivers;
};

// Table prototype
PizzaShop.prototype.render = function() {

  this.setPizzaSold();
  var shopTable = document.createElement('table');

  var trHeader1 = document.createElement('tr');

  tdEl = document.createElement('td');
  tdEl.textContent = this.place;
  trHeader1.appendChild(tdEl);

  tdEl = document.createElement('td');
  trHeader1.appendChild(tdEl);

  shopTable.appendChild(trHeader1);

  var trHeader2 = document.createElement('tr');

  tdEl = document.createElement('td');
  tdEl.textContent = 'TIME';
  trHeader2.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'PIZZAS SOLD';
  trHeader2.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'DELIVERIES';
  trHeader2.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'DRIVERS RECOMMENDED';
  trHeader2.appendChild(tdEl);

  shopTable.appendChild(trHeader2);

  for (var i = 0; i < this.hoursOpen.length; i++) {

    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = this.hoursOpen[i];
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.pizzaSold[i];
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.deliveries[i];
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = this.drivers[i];
    trEl.appendChild(tdEl);

    shopTable.appendChild(trEl);
  }

  document.body.appendChild(shopTable);
}

// Creating the pizza shops
var ballard = new PizzaShop('Ballard', ballardMinPizza, ballardMaxPizza, ballardMinDelivery, ballardMaxDelivery);

var firstHill = new PizzaShop('First Hill', firstHillMinPizza, firstHillMaxPizza, firstHillMinDelivery, firstHillMaxDelivery);

var internationalDistrict = new PizzaShop('International District', theIDMinPizza, theIDMaxPizza, theIDMinDelivery, theIDMaxDelivery);

var slu = new PizzaShop('South Lake Union', sluMinPizza, sluMaxPizza, sluMinDelivery, sluMaxDelivery);

var georgeTown = new PizzaShop('Georgetown', georgetownMinPizza, georgetownMaxPizza, georgetownMinDelivery, georgetownMaxDelivery);

var ravenna = new PizzaShop('Ravenna', ravennaMinPizza, ravennaMaxPizza, ravennaMinDelivery, ravennaMaxDelivery);

ballard.setPizzaSold();
ballard.setDeliveries();
ballard.setDrivers();
ballard.render();
firstHill.setPizzaSold();
firstHill.setDeliveries();
firstHill.setDrivers();
firstHill.render();
internationalDistrict.setPizzaSold();
internationalDistrict.setDeliveries();
internationalDistrict.setDeliveries();
internationalDistrict.render();
slu.setPizzaSold();
slu.setDeliveries();
slu.setDrivers();
slu.render();
georgeTown.setPizzaSold();
georgeTown.setDeliveries();
georgeTown.setDrivers();
georgeTown.render();
ravenna.setPizzaSold();
ravenna.setDeliveries();
ravenna.setDrivers();
ravenna.render();
