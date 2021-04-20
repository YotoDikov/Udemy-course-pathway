'use strict';

// So what is SET? Looks llike array but its not. The set contains unic values only. That means if we have two identical values one of them will be ejected:

const orderSet = new Set([
  'Pesho',
  'Misho',
  'Gosho',
  'Pesho',
  'Pesho',
  'Gosho',
]);
console.log(orderSet); // Set(3) {"Pesho", "Misho", "Gosho"}

// In set we can pass only oterables
// In the set result has not key value pairs, just a bunch of values grouped together

console.log(new Set('Pesho')); // Set(5) {"P", "e", "s", "h", "o"}

// Set have a property called .size which returns the count of the unique elements. Lets see what will retunr from the 'orderSet':
console.log(orderSet.size); // 3 ... Because from the duplicated values is returning ony one of them. In other word the '.size' returns how many different elements  are existing in the set

// Set have method called 'has()' which contains sugestion element and if this element apears inthe set it will return true.Othewise will return false:
console.log(orderSet.has('Vanio')); // false
console.log(orderSet.has('Pesho')); // true

// We can add elements in the set with the property 'add()':
orderSet.add('Vanio');
console.log(orderSet); // {"Pesho", "Misho", "Gosho", "Vanio"}

// If we try add an element that alredy exists it will not return him:
orderSet.add('Vanio');
console.log(orderSet); // {"Pesho", "Misho", "Gosho", "Vanio"}

// We can also deleteing elements frtom set:
orderSet.delete('Vanio');
console.log(orderSet); // {"Pesho", "Misho", "Gosho"}

// In sets there is no index:
console.log(orderSet[0]); // undefined

// Actualy we can't get a value out of sets

// We can clear the whole set (deleting all elements) witn the 'clear()' method:
// orderSet.clear();
// console.log(orderSet); // Set(0) {}

// In the begining we say that the stes are iterabble. That means we can loop them:
for (const guy of orderSet) console.log(guy); // Pesho \n Misho \n Gosho

// So how we can use in practise the sets, if we can't getting out elements from them? We can make an array which have an duplicated elements, and then we can create another variable which contains new set of this array. And we can have an array with unique values. Lets make this sample:
const ingredients = [
  'karrot',
  'garlic',
  'banana',
  'garlic',
  'raspbery',
  'karrot',
];

const ingredientsUnique = new Set(ingredients);
console.log(ingredientsUnique); // {"karrot", "garlic", "banana", "raspbery"}... Cool, but we have the new varriable as set. What if we want to have this result as array? We just have to put the set in square brackets as spread operator when we dleclarate the varriable:
const arrayOfIngredientsUnique = [...new Set(ingredients)];
console.log(arrayOfIngredientsUnique); // ["karrot", "garlic", "banana", "raspbery"];
