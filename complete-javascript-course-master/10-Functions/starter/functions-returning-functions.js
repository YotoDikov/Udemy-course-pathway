'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet('Hey', 'Pesho'); // Nothing returned ... This is because when we call the 'greet' fnc it expect one argument, ok? And we giv them. BUT the func returns another fnc which have an argument differrent than the greet's one. AAnd actualye we try to return this function without put them an argument (name). Ok, but we are put in the greet fnc a second argument for the exactly that returned fnc and its not taking it. Maybe this is happend because the return fnc is in closure but im not sure :D. But lets see how to solve this problem ... we can declare a new variable (greeterHey) which returns the 'greet' fnc with argument ('Hey):
const greeterHey = greet('Hey'); // Still nothing ... But now if we call greetHey() with a new argument ('Pesho') ...

greeterHey('Pesho'); // Hey Pesho ... When we call 'greeterHey()' it automaticaly return greet('Hey') as CALLBACK FUNCTION with 'Hey' argument. And when call 'greeterHey('Pesho')' the 'Pesho' is getted from the greet's retunr function. Still can't understand why :D

// Another way to return the 'greet' fnc:
greet('Hello')('Pesho'); // Hello Pesho

// with arrow functions
const heyHey = hey => {
  return theName => {
    console.log(`${hey}, ${theName}!`);
  };
};

const sayHey = heyHey('HEY');
sayHey('PESHO'); // HEY, PESHO!

// Jonas's way with arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas'); // Hi Jonas
