'use strict';
const friends = { bestOne: 'Gosho', goodOne: 'Misho' };

const person = {
  fName: 'Pesho',

  // trying to put the friends obj here...

  // the older way:
  // person: person

  // ES6 newest way:
  person,

  // making function property...

  //way one:
  //   doingSomething: function () {
  //       console.log('Something!');
  //   }

  // way twho (the better way):
  doingSomething() {
    console.log('Something!');
  },
};
