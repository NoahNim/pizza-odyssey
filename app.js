// JS file for pizza website
// 'use strict';
var listFodder = [];
// var placeForMyList = document.getElementbyId();

function listify(stuffToBeListed){
// the for loop for the array
  for(i = 0; i < listFodder.length; i++){
    var liE1 = document.createdElement('li');
// build an li element
    liE1.textContent = stuffToBeListed[i]
// put it in the dom
    placeForMyList.appendChild(liE1)
  }
}

// Array of times

var timeArray = ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm', '12:00 am', '1:00 am'];

// The object for the Ballard Pizza 3001 location
var ballardShop = {
  name:'Pizza 3001',
  location: 'Ballard',
  pizza: [],
  deliveries: [],
  drivers: [],
  // Functions to determine pizzas and deliveries
  stuffMaker: function(min, max){
    var amountOfPizzas = Math.floor(Math.random() * (max - min + 1)) + min;
    this.pizza.push(amountOfPizzas),
  function theDeliveries(){
    var amountOfDeliveries =
    this.deliveries.push(amountOfDeliveries)
  }
  }
};
