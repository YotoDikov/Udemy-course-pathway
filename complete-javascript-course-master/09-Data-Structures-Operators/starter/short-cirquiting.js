'use strict';

/////////// OR OPERATOR /////////////
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Pesho'); // 3 ... The boolean operator return the first truty value he detect. If the two values are truty, the the operator return the first one. In this case this is 3. So that is the short-circuiting - when we have twot truty values, the first one is always with priority.

// console.log('' || 'Pesho'); // Pesho
// console.log(true || 0); // true
// console.log(undefined || null); // null ... In this case we have two falsy values (WTF?). Well, we skip the first, but its have to return something anyway so it returns the second value.

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// let person = {
//   name: 'Pesho',
// };

// person.age ? (person.age = 30) : (person = 1);
// console.log(person); // 1

// let person2 = {
//   fName: 'Gosho',
//   age: 0,
// };
// person2.age ? (person2.age = 50) : (person2 = 1);
// console.log(person2); // 1 Because age: 0 is falsy
// But if we change person2.age = 2 ...
// person2.age = 2;
// person2.age ? (person2.age = 50) : (person2 = 1);
// console.log(person2); // {fName: "Gosho", age: 50}

// ////////////// AND OPERSTOR /////////////
// console.log(0 && 'Pesho'); // 0 ... WHY? Because the 'AND' operator stops in the first falsy value that it points (short cirquiting).
// console.log(7 && 'Pesho'); // Pesho ... WHY? It seems like the "AND" returns only the last value if its not any falsy in his path.
// console.log(7 && 'asdas' && person && 'pak Pesho'); // pak Pesho

// function logSomething() {
//   console.log('its logged');
// }

// if (logSomething) {
//   logSomething();
// } // its logged ... Now Lets make the same example with  && :
// logSomething && logSomething(); // its logged ... COOL!

////////////// nullish value ////////////////////

// const nurd = {
//   books: 5,
// };
// nurd.books = 0;
// const book = nurd.books ?? 10;
// console.log(book); // 0 ... WHY? Because the ?? operator means : "If nurd.books === null or nurd.books === undefined, then book = 10". Note that - ONLY if the value is NULL or UNDEFINED... So what if the nerd.books = null or undefined? Then the result its gona be 10
