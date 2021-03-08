'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // Don't forget to set the parametters of function in curly braces, because the func have to take object as parametter. Otherwise will return Undefined.
    // console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },
};

//////////////////////
// Destructuring
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Angelo Tavanti 23',
  mainIndex: 2,
  starterIndex: 2,
}); // Order received! Garlic Bread and Risotto will be delivered to Via Angelo Tavanti 23 at 22:30

// And now, only because we set default values on the properties of the object parameter (above, where we declared the orderDelivery() function) we can try to call this function without defining some of the properties just to check the default values works ...
restaurant.orderDelivery({
  address: 'Via Angelo Tavanti 23',
  starterIndex: 1,
}); // Order received! Bruschetta and Pizza will be delivered to Via Angelo Tavanti 23 at 20:00

/////////////////////
// Spread operator

// copy array
// const mainMenuCopy = [...restaurant.mainMenu, 'Bobets'];
// console.log(mainMenuCopy); // ["Pizza", "Pasta", "Risotto", "Bobets"]
// console.log(restaurant.mainMenu); // ["Pizza", "Pasta", "Risotto"]

// joint 2 or more arrays
// const joinArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(joinArrays); // ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]

// Spread operator not only working with arrays, but with all iterables (arrays, strings, maps, sets etc. ) but not with objects.
// const str = 'Pesho';
// const letters = [...str, ' ', 'Pichagata'];
// console.log(letters);
// console.log(`${...str} Pichagata`); // Uncaught SyntaxError: Unexpected token '...' We cant use spread operator in the interpolation's curly braces, because there is expect to gain one value , and ...str return every letter as individual element separated by coma ...

// const ingredients = [
//   prompt("Let's make pasta! ingredient 1?"),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
// ];
// console.log(ingredients); // return 3 prompts obe by one and there we can wrhite some value

// restaurant.orderPasta(...ingredients); // Here is your delicious pasta with 4u6ki domati and zele

// With Objects
// const restaurantCopy = [...restaurant]; // Uncaught TypeError: restaurant is not iterable ... That's because restaurant is Object and the objects are not iterable. That's why we'd better put ...restaurant in curly brackeds:
const restaurantCopy = { ...restaurant }; // Object similar to restaurant's object.
// Now lets remember what happend when we make a copy of an object with object.assign()... we make shadow copy. That means if we change propery value in the copy that  property will be changed in to the original one to. Lets see what will happen in this case where we create a copy with spread operator:
restaurantCopy.name = 'Mandjite na Pesho';
console.log(restaurantCopy.name); // Mandjite na Pesho
console.log(restaurant.name); // Classico Italiano
