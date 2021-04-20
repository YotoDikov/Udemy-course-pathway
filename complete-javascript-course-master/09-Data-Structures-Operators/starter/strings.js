'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log('B737'[0]); // B
console.log('B737'.length); // 4
console.log(airline.indexOf('r')); // 6 ... Return the index the first 'r' char.
console.log(airline.lastIndexOf('r')); // 10 ... If the string have thwo or more identical chars it will return the index of the last one.

// Strings can't be mutated. They are primitives.

///////////// Slice of strings //////////////
console.log('//////////// Slice '.padEnd(100, '/'));

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air
// So when we use slice() the first number parameter is where the slice start. That means every element which indext is less than 4 will not be returned. The second parameter means until which index element will be returned. In other words start and end (string.slice(startIndex, endIndex)).

console.log(airline.slice(0, airline.indexOf(' '))); // Air
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // al ... From Porgugal. With negative parameters we start counting from the last to the first index.
console.log(airline.slice(0, -1)); // TAP Air Portuga

// How the strings work ? Why they have methods like objects if they are primitives? Whenever we call a method on a string Javascript will automaticaly behind the scenes convert that string primitive to a string object with the same content. And then it's on that object where the methods are called. And this process is called boxing, because it basicaly takes our string and puts it into a box. which is the object. So basicaly what happens is this.
console.log(new String('Pesho')); // String {"Pesho"}
console.log(typeof new String('Pesho')); // object

// After call a method and when the method is done then the object is returned to string primitive:
console.log(typeof new String('Pesho').slice(1)); // string

///// convert string to uppercase only the first char (capitalise) /////////////
console.log('///////////// Capitalise '.padEnd(100, '/'));
const person = 'pesho';
const correctName = person[0].toLocaleUpperCase() + person.slice(1);
console.log(correctName); // Pesho

////////////// replacing string chars //////////////
console.log('//////////// Replace '.padEnd(100, '/'));

const priceInsPounds = '288,97£';
const priceInDollars = priceInsPounds.replace('£', '$');
console.log(priceInDollars); // 288,97$

const text = 'I like pizza, and i also like cakes.';
const replacedLike = text.replaceAll('like', 'love');
console.log(replacedLike); // I love pizza, and i also love cakes... This is good, but replaceAll() method not working in all browsers which is problem so we have better solution and we have to replace the replaceAll with regexp:
const replaceWithRegexp = text.replace(/like/g, 'love');
console.log(replaceWithRegexp); // I love pizza, and i also love cakes.

////// Booleans //////
console.log('////////// Booleans '.padEnd(100, '/'));
console.log(plane.includes('A320')); // true
console.log(plane.includes('320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('A3')); // true
console.log(plane.endsWith('20')); // true

////////// Split ///////////////
console.log('////////// Split '.padEnd(100, '/'));
const [firstName, lastName] = 'Pesho Pichagata'.split(' ');
console.log(firstName); // Pesho
console.log(lastName); // Pichagata

///////////// join /////////////
console.log('///////////// Join '.padEnd(100, '/'));
const fullName = [firstName, lastName].join(' ');
console.log(fullName); // Pesho Pichagata

///////////// Capitalise a full name (pesho petrov pichagata) ///////////
console.log('///////// Capitalise full name '.padEnd(100, '/'));
const capitaliseFullName = function (name) {
  const names = name.split(' ');
  const partNameCap = [];
  for (const n of names) {
    partNameCap.push(n[0].toUpperCase() + n.slice(1)); // There is another way to capitalise a name - with .replace()... paetNmaeCap.push(n.replace(n[0], n[0].toUpperCase())); ... cool
  }

  console.log(partNameCap.join(' '));
};

capitaliseFullName('pesho petrov pichagata'); // Pesho Petrov Pichagata

/////////////// Padding ////////////////////
console.log('/////// Padding '.padEnd(100, '/'));
// So what padding a string means? Padding add a number of elements in the string until it gets the desired lenght. For example if we have  alist of texts which we want all the texts to be with the same length and for this case if we have too short text we will add it neutral symbol like '-' or '.' until it fits the right length:
const textLength = 'Pesho love to ead pizza'; // there is 23 elements in this text. But we want to be 30:
console.log(textLength.padStart(30, '+')); // +++++++Pesho love to ead pizza ... padStart() adding symbols in the start of the text. The first parameter (30) is the length we want to make the string. If the text is 23 the padding automaticaly adds 7 symbols. The secont parameter ('+') is the added symbol.
const shorterText = 'Pesho wins!'; // 11 elements.
console.log(shorterText.padStart(30, '+')); // +++++++++++++++++++Pesho wins! ... 30.
// There is and padEnd() to ... Actualy we can combine padStart and padEnd:
console.log(shorterText.padStart(20, '+').padEnd(30, '+')); // +++++++++Pesho wins!++++++++++ // 30 ... So, here with the padStart we make text length with 20 elements. The the padEnd add elements until the text grow to 30 elements. So in this case the padEnt defines the total length on the text.

///////// Padding exersize ///////////
console.log('////////// Padding exersixe '.padEnd(100, '/'));
// lets simulate a credit card number (the number that we see the last 4 digits only and the resto of them are '*'):

const maskCreditCard = function (number) {
  const str = number + ''; // We did this because the padding works with strings.
  const last = str.slice(-4); // -4 will take the last 4 digits of the number.
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(349872342039786)); // ***********9786
console.log(maskCreditCard('349872342234232')); // ***********4232 ... this works and with string input... Cool

////////// Repeat //////////////////
console.log('////////// Repeat '.padEnd(100, '/'));
const text2 = 'Repeat that shit';
console.log(text2.repeat(5)); // Repeat that shitRepeat that shitRepeat that shitRepeat that shitRepeat that shit

///// Repeat Exersize ///////
console.log('///// Repeat Exersize '.padEnd(100, '/'));

const repeatFunc = function (n) {
  const message = `You died ${n} times ${'☠ '.repeat(n)}`;
  return message;
};

console.log(repeatFunc(5)); // You died 5 times ☠ ☠ ☠ ☠ ☠

/////////// String methods exersize /////////////////
console.log('/////////// String methods exersize '.padEnd(100, '/'));

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const operations = flights.split('+');

///////////// Primal solution ///////////////
// for (const el of operations) {
//   const [action, from, to, clock] = el.split(';');
//   const actionDetails = action.split('_');
//   actionDetails.shift();
//   const actionResult = actionDetails.join(' ').startsWith('Delayed')
//     ? `⛔ ${actionDetails.join(' ')}`
//     : actionDetails.join(' ');

//   const fromDetails = from.slice(0, 3).toUpperCase();
//   const toDetails = to.slice(0, 3).toUpperCase();
//   const clockDetails = `(${clock.split(':').join('h')})`;

//   const result = `${actionResult} from ${fromDetails} to ${toDetails} ${clockDetails}`;
//   console.log(result.padStart(44));
// }

///////////// help from Jonas /////////////////

const convertCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${convertCode(from)} to ${convertCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);

  console.log(output);
}
