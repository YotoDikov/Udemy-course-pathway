'use strict';

// Map is a data structure that we ca use to map values to keys. So just like an object data is stored in key value pairs in maps. The big difference between objects and maps is that in maps the keys can have any type. In objects the keys are basically always strings. But in maps they can even be objects or arrays or other maps.

const person = new Map(); // now we have map.

////////////// SET //////////////////
// set key value pairs:
person.set('name', 'Pesho');
// set another key value pairs:
person.set(2, 'Pecheniq');

// When we calling that set method like this does not only update the map that it's called on, but also returns the map:
console.log(person.set(3, 'pichagata')); // Map(3) \n [[Entries]] \n 0: {"name" => "Pesho"} \n 1: {2 => "Pecheniq"} \n 2: {3 => "pichagata"}

// Summary - when we call set method on the map it returns the whole updated map.

//////////////// GET /////////////////////

// with get method we are getting thekey and return the value:
console.log(person.get('name')); // Pesho
console.log(person.get(2)); // Pecheniq

// Now the second key we called is a number. What will happend if we call it as string ? :
console.log(person.get('2')); // Undefined ... So always get the keys as the original type where they are created.

////////////// Exersize ///////////////

person.set(true, 'Pesho is young enought to do stupid things');
person.set(false, 'Pesho is not young enought to do stupid things');
person.set('youngLimit', 1);
person.set('oldLimit', 17);

const age = 16;

console.log(
  person.get(age > person.get('youngLimit') && age < person.get('oldLimit'))
); // Pesho is young enought to do stupid things ... What?? it returns the 'true' key that we set above. That is because in this sample the get method return a boolean. Cool!!

///////////// HAS //////////////

console.log(person.has(2)); // True

///////////// Delete ///////////

person.delete(2);
console.log(person); // All the key value pairs without the deleted one (2).

//////////// Size ///////////////

console.log(person.size); // 6

///////////// Clear //////////////
// person.clear();
// console.log(person.size); // 0

/////////////// Exersize ///////////////
// What if we set array key and the try to get it? Is it will return the value? :
// person.set([1, 2], 'Test');
// console.log(person.get([1, 2])); // Undefined ... So why is that happend? Because the array we set and the array we get are not the same. The points in different locations in the data. So how we can get this array key then? :
const arr = [1, 2];
person.set(arr, 'Test');
console.log(person.get(arr)); // Test

////////////// Exersize /////////////

// we can create a map which all key value pairs are are array and all of the are contains in array. I mean an array map that contains arrays ([[], [], []]):
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question); // the whole map.

// So this question map structure looks like when we make 'Object.entries(obj)' of an object which returns an array of arrays ([[], [], []]). So what i mean is that we can easely convert an object to map:
const obj = {
  fName: 'Pesho',
  lName: 'Pichagata',
  age: 16,
};

const mappedObj = new Map(Object.entries(obj));
console.log(mappedObj); // {"fName" => "Pesho", "lName" => "Pichagata", "age" => 16}

//////////////// Exersize //////////////////////

console.log(question.get('question')); // What is the best programming language in the world?

// As we know the maps are also iterables so we can lop them:
for (const [key, value] of question) {
  typeof key === 'number' ? console.log(`Answer ${key}: ${value}`) : false; // Answer 1: C \n Answer 2: Java \n Answer 3: Javascript
}
// const answer = Number(prompt('Your answer'));
const answer = 3;

// console.log(
//   question.get('correct') === answer ? question.get(true) : question.get(false)
// ); // There is better whay to log that shit:

console.log(question.get(question.get('correct') === answer)); // This is good because returns  boolean which we get and as we know the question map have true and false keys which we need to activate .

/////////////// CONVERT MAP TO ARRAY ////////////

const convertMapToArray = [...question];
console.log(convertMapToArray); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)] ... cool!
