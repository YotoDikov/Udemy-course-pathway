'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed by: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

transformer(`Javascript is the best!`, upperFirstWord); // Original string: Javascript is the best! \n Transformed by: JAVASCRIPT is the best! \n Transformed by upperFirstWord
transformer(`Javascript is the best!`, oneWord); // Original string: Javascript is the best! \n Transformed by: javascriptisthebest! \n Transformed by oneWord
