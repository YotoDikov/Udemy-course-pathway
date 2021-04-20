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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }, // REST
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

//copy array
const mainMenuCopy = [...restaurant.mainMenu, 'Bobets'];
console.log(mainMenuCopy); // ["Pizza", "Pasta", "Risotto", "Bobets"]
console.log(restaurant.mainMenu); // ["Pizza", "Pasta", "Risotto"]

//joint 2 or more arrays
const joinArrays = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinArrays); // ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]

////Spread operator not only working with arrays, but with all iterables (arrays, strings, maps, sets etc. ) but not with objects.
const str = 'Pesho';
const letters = [...str, ' ', 'Pichagata'];
console.log(letters);
console.log(`${...str} Pichagata`); // Uncaught SyntaxError: Unexpected token '...' We cant use spread operator in the interpolation's curly braces, because there is expect to gain one value , and ...str return every letter as individual element separated by coma ...

const ingredients = [
  prompt("Let's make pasta! ingredient 1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];
console.log(ingredients); // return 3 prompts obe by one and there we can wrhite some value

restaurant.orderPasta(...ingredients); // Here is your delicious pasta with 4u6ki domati and zele

//With Objects
const restaurantCopy = [...restaurant]; // Uncaught TypeError: restaurant is not iterable ... That's because restaurant is Object and the objects are not iterable. That's why we'd better put ...restaurant in curly brackeds:
const restaurantCopy = { ...restaurant }; // Object similar to restaurant's object.
////Now lets remember what happend when we make a copy of an object with object.assign()... we make shadow copy. That means if we change property value in the copy that  property will be changed in to the original one to. Lets see what will happen in this case where we create a copy with spread operator:
restaurantCopy.name = 'Mandjite na Pesho';
console.log(restaurantCopy.name); // Mandjite na Pesho
console.log(restaurant.name); // Classico Italiano

/////////////////////////////
//REST Pattern with destructuring
//So far we learn about the spread operator that he "unpackage" elements from array. The REST pattern make the opposit of that. It "packing" elements into array .
//The Spread operator and the REST pattern looks the same as sintax, but they have one differense - the spread is always puts in  right to assignment ( " = " ) , and the Rest is stayng on the left from the assign ...
const arr = [1, 2, ...[3, 4]]; // Spread operator. from the right.
const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST pattern. from the left

console.log(arr); // [1, 2, 3, 4];
console.log(a, b, others); // 1 2 [3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // We put an empty element between pizza and risotto only because to try to skip the "pasta element which is there by default."
console.log(pizza, risotto, otherFood); // Pizza Risotto (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
////In this example we can see that the "pasta element which stay by default between "Pizza" and "Risotto" is skiped from the result. That is because the REST pattern takes only the elements which is stayng after the closest element stayng on the left of the REST. In this example this element is "Risotto". Everything we skip before risotto and replace with coma is skipped. That is why the REST pattern a;ways be in the last of the destructuring, because it must know what is skipping and to return the rest. Lets see what will happend if we put another element after the REST ...
const [pizza2, risotto2, ...otherMenu, pasta] // Uncaught SyntaxError: Rest element must be last element ... We can put REST only in the last of destructuring and we can put only one REST in the destructuring.

//REST with Objects
const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays); //  {thu: {…}, fri: {…}}

/////////////////////////////
//REST Pattern with functions

const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3); // [2, 3]
add(5, 3, 7, 2); // [ 5, 3, 7, 2]
add(8, 2, 5, 3, 2, 1, 4); // [8, 2, 5, 3, 2, 1, 4]

const x = [1, 2, 3, 6, 76];

add(...x); // [1, 2, 3, 6, 76] REST is packing them anaig

restaurant.orderPizza('mushrooms', 'onion', 'spanich', 'olives'); // mushrooms (as mainIngredient) ["onion", "spanich", "olives"] (as other ingredients)

restaurant.orderPizza('mushrooms'); // mushrooms [] // in this case if we put only one argument in the function it will return it and also will return an empty array as secone argument (its array because by default the otherIngredients is REST and pack them into array)
