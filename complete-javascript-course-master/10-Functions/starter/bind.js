'use strict';
const poduqne = {
  station: 'Poduqne',
  code: 'PD',
  bookings: [],
  book: function (travelNumber, name) {
    console.log(
      `${name} booked a seat on ${this.station} travel ${this.code}${travelNumber}`
    );
    this.bookings.push({ travel: `${this.code}${travelNumber}`, name });
  },
};
const book = poduqne.book;

const centralStation = {
  station: 'Centralna avtogara',
  code: 'CS',
  bookings: [],
};

///////////////////////// Call ///////////////////////////
console.log('///////////////////////////// Call '.padEnd(100, '/'));
book.call(centralStation, 567, 'Petar'); // Petar booked a seat on Centralna avtogara travel CS567
book.call(poduqne, 123, 'Pesho'); // Pesho booked a seat on Poduqne travel PD123

////////////// Bind /////////////////
console.log('///////////////////////////// BIND '.padEnd(100, '/'));

// With bind() we can reuse an object method (just like we do with 'call()' and 'apply()') with another context but we can assign it in variable:
const bookBind = book.bind(centralStation); //  We are making a book function which is personaly for the 'centralStation' object.

bookBind(12345, 'Penka'); // Penka booked a seat on Centralna avtogara travel CS12345 ... So COOL!  now we are writing only the number and the name but we can go furthur with that:

const bookPD = book.bind(poduqne, 456789);
bookPD('Gerganka'); // Gerganka booked a seat on Poduqne travel PD456789
bookPD('Strinka'); // Strinka booked a seat on Poduqne travel PD456789
// Now we are just need to whrite the name only. We also can declare the number and the name but that is pointless. When we predefine a property in bind method ('456789' in this case) that predefinig is called partial application.

/////////////////////// Bind with event listeners ///////////////////////////
console.log(
  '///////////////////////////// Bind with event listeners '.padEnd(100, '/')
);

poduqne.buses = 180;
poduqne.buyBus = function (params) {
  console.log(this);

  this.buses++;
  console.log(this.buses);
};

// document.querySelector('.buy').addEventListener('click', poduqne.buyBus); // <button class="buy">Buy new plane 🛩</button> \n NaN ... Why this is happen ? BEcause the parent of the 'poduqne.buyBus' in this case is 'addEventListener()' and returns the context of the event (the butoon's element). But we want to use the poduqne's context. That is why we can use bind:
document
  .querySelector('.buy')
  .addEventListener('click', poduqne.buyBus.bind(poduqne)); // {station: "Poduqne", code: "PD", bookings: Array(3), buses: 180, book: ƒ, …} \n 181 ...

///////////////// Partial application /////////////////////////////////

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(addTax, 0.23);
console.log(addVAT(100)); // 123

// Now lets see how this will happen without Bind:

// with functions only
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29
