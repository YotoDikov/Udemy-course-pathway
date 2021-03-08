'use strict';

// PRIMITIVE TYPES VS REFERENCE TYPES

// Primitives

let me = 'Pesho';
let you = me; // Pesho... In this case the "you" variable use the same adress of memory as the "me" variable. This is the adress where the value is stored. And it stored into the call stack.

you = 'Pencho'; // What will happend when we change the value of the "you" variable? In this moment in the call stack is created new personal adress for the "you" where is stored hes new value (Pencho). The "me variable is still in the same old adress with the same old value (Pesho)".

console.log(me, you); // Pesho Pencho...

// References

const pesho2 = {
  firstName: 'Pesho',
  lastname: 'Pichagata',
};

const pesho3 = pesho2; // {firstName: "Pesho", lastname: "Pichagata"}

pesho3.lastname = 'Pecheniq';

// console.log(pesho3); // {firstName: "Pesho", lastname: "Pecheniq"}
// console.log(pesho2); // {firstName: "Pesho", lastname: "Pecheniq"}

// What happened in the sample above? pesho2 is reference type variable. When we make it, the variable store value and adress for this value into the call stack, just like a primitive variable. But now the value is not the result of the variable. Its an aress which points into the heap, where the real value is stored.

// Summarily - A reference type variables store adress into the call stack which value is adress that points to the heap where the real value is stored.

// So, what happens, when we create the "pesho3" variable? It use the same adress in the call stack. And when we change the property value from pesho3, the "pesho2" value is also changed with the same value. This happens, because, as the primitives sample we change the value in the call stack which in this case is not the real value, its the adress for the heap storage. That means the two variables still share the same adress in the call stack. The change the adress which point to the heap storage.

// Why the two variables are declared with const and did not throw error ? This is because we actualy change the adress inte heap which is value on the callstack's adress on the variables.If we change the ardess in the call stack, then the console should trow an error. For example below..
// pesho3 = {};
// console.log(pesho3); // Uncaught TypeError: Assignment to constant variable

const pesho4 = Object.assign(pesho2);

pesho4.lastname = 'Pichagata';
console.log(pesho3); // {firstName: "Pesho", lastname: "Pecheniq"}
console.log(pesho2); // {firstName: "Pesho", lastname: "Pecheniq"}
console.log(pesho4); // {firstName: "Pesho", lastname: "Pichagata"}
// When we declare variable with Object.assign() we made a copy of the "pesho2" object and now we can change properties without changing pesho2. But what will happen if we add property with object or array value on pesho2, and the add in this property more elements but in the pesho4 object?For example...
pesho2.family = ['Gosho, Mara'];
pesho4.family.push('Gincheto');
console.log(pesho2);
console.log(pesho4);
// So what's happen is that when we make copy with Object.assign(), its actualy a shadow copy, which means every property with object/array va (every nested object) will be the same in the copy and in the original obgect.
