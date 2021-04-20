'use strict';

const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum, // undefined
    numPassengers, // undefined
    price, // undefined
  };
  console.log(booking); // {flightNum: undefined, numPassengers: undefined, price: undefined}
};

createBooking(); // {flightNum: undefined, numPassengers: undefined, price: undefined}
// The parameters of functions are undefined as default. But we can change this. We can make the to be truthy or falsy values... The older way to do that is to change the values in the function:

//////////// Older way to define default property values (ES5) ////////////

const createBooking2 = function (flightNum, numPassengers, price) {
  flightNum = 1;
  numPassengers = 100;
  price = 300;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking); // {flightNum: 1, numPassengers: 100, price: 300}
};

createBooking2(); // {flightNum: 1, numPassengers: 100, price: 300}

// The new way to define property values (in ES6) is hapening directly where we declare the parameters:

////////// The ES6 way to define property values /////////////

const createBooking3 = function (
  flightNum = 5,
  numPassengers = 200,
  price = 180
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking); // {flightNum: 5, numPassengers: 200, price: 180}
};

createBooking3(); // {flightNum: 5, numPassengers: 200, price: 180}

// Also we can define default property a value that can be combined with the default property value which is ordered before the current one. Lets see:

const createBooking4 = function (
  flightNum = 5,
  numPassengers = 200,
  price = numPassengers * 1.5 // We add the default value from the 'numPassengers' which is defined before the 'price' parameter. If we try to add the value from 'price' to 'numPassengers' parameter it will throw an error because the price is still not declared.
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking); // {flightNum: 5, numPassengers: 200, price: 300}
};

createBooking4(); // {flightNum: 5, numPassengers: 200, price: 300}

/////////////////// Skipping an argument when we call function ///////////
// Actualy we can't skip an argument when we call a function. At least not totally. If we want to call 'createBooking' function without declaring the 'numPassengers' argument we cant just say createBooking(10, 500) and to expect to take the 'flightNum' and the 'price' (and skipping the numPassengers):
createBooking4(10, 500); // {flightNum: 10, numPassengers: 500, price: 750} ... As you can see it returns 'flightNum: 10' but the second parameter is automaticaly going to the second declared one - 'numPassengers'. And the 'price' is retuned his default value (its 750 because we set as default to multiply 'numPassengers' to 1.5). Now there is how we can 'skip' the 'numPassengers':

createBooking4(10, undefined, 500); // {flightNum: 10, numPassengers: 200, price: 500} ... when we declare undefined parameter it automaticaly gets his default value (200).
