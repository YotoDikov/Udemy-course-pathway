'use strict';

//THIS KEYWORD:

console.log(this); // Window

const person = function () {
  console.log(this);
};
person(); // Undefined in strct mode. Otherwise will be Window.

var lastName = 'Globalniq';
const pesho = {
  firstName: 'Pesho',
  lastName: 'Pichagata',
  year: 10,
  growup: function () {
    console.log(this.year + 2); // 12
  },
  skill: this,
  greet: () => console.log(`Hey ${this.firstName}`),
  hisLastName: () => console.log(`Hes last name is ${this.lastName}`),
  sayHi: function () {
    const sayHello = () => console.log(`Hi! From ${this.lastName}`);
    sayHello();
  },
  sayGoodBye: function () {
    // const goodByeFromThis = function () {
    //   console.log(`Good bye! From ${this.lastName}`);
    // };
  },
  secondSayGoodBye: function () {
    const arrowGoodByeFromThis = () =>
      console.log(`Good bye! From ${this.lastName}`);
    arrowGoodByeFromThis();
  },
};

pesho.growup(); // Object pesho

pesho.greet(); // Hey Undefined... because greet() is an arrow function and have not his own this. And automaticaly attach to his parrent . And this is not the pesho Object. Pesho have not block scope. he is object literal. So greet go in to Global scope.

pesho.hisLastName(); // Globalniq. Because is in arrow function which is in object's lexical scope and automaticaly attach in the next parent which is the global object (Window). And because we made variable lastName = 'Globalniq' in the Window the THIS from hisLastName get exactly that property and printed him.

pesho.sayHi(); // Hi! From Pichagata... The arrow function attached into sayHi's this.

pesho.sayGoodBye(); // Uncaught TypeError: Cannot read property 'lastName' of undefined... This is because his parent function have not this.lastName as property. That is automaticaly returns an error. In this case if the goodByeFromThis function is made as an arrow function what will happen? The arrow function will go into his parent (sayGoodBye) and will searching for lastNameProperty. And if found nothing there will continue to search in the next parent which is the pesho Object. And the result will see in the bottom simple....

pesho.secondSayGoodBye();

function nameThis() {
  console.log(this);
}
nameThis(); // Undefined

const mi6o = {
  year: 12,
};

mi6o.growup = pesho.growup;
mi6o.growup(); // 14

mi6o.skill = pesho.skill;
console.log(mi6o.skill); // Window
