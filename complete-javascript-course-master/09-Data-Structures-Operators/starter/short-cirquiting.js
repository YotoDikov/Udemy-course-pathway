'use strict';

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Pesho'); // 3 ... The boolean operator return the first truty value he detect. If the two values are truty, the the operator return the first one. In this case this is 3. So that is the short-circuiting - when we have twot truty values, the first one is always with priority.

console.log('' || 'Pesho'); // Pesho
console.log(true || 0); // true
console.log(undefined || null); // null ... In this case we have two falsy values (WTF?). Well, we skip the first, but its have to return something anyway so it returns the second value.

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

let person = {
  name: 'Pesho',
};

person.age ? (person.age = 30) : (person = 1);
console.log(person); // 1

let person2 = {
  fName: 'Gosho',
  age: 0,
};
person2.age ? (person2.age = 50) : (person2 = 1);
console.log(person); // 1
