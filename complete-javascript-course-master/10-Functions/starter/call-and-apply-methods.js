const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(123, 'Pesho'); // Pesho booked a seat on Lufthansa flight LH123
lufthansa.book(456, 'Gosho'); // Gosho booked a seat on Lufthansa flight LH123

// The code above is standart using of 'THIS'.

// Now lets see what will happen if we create new  airline object and try to reuse the 'book' method from Lufthansa:
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // Uncaught TypeError: Cannot read property 'push' of undefined ... This is happen because in the original book method we use 'THIS' keyword which is able to be used only from his parent object. Now lets see how we can solve the problem:

////////////// Call ////////////////////////////////////////////////
console.log('////////////////// Call '.padEnd(100, '/'));
book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23 ... With Call() method ... when we use call() as first parameter we put in it the object  which context we want to use. And the rest of the parameters are the arguments required to be working this 'book' methond.
console.log(eurowings); // {airline: "Eurowings", iataCode: "EW", bookings: Array(1)}

// if we want the call() method to work correctly we have to use objects that hae the same propertie names other wise the 'book' method will not recognise it putn on the value undefined instead.

//////////////////////// Apply ///////////////////////////////////////////
console.log('////////////////// Apply '.padEnd(100, '/'));

// The Apply() method is basicaly the same as the call() but here we have to gain the parameters for the function fro array:
const flightData = [432, 'Ivan Ivanov'];
book.apply(lufthansa, flightData); // Ivan Ivanov booked a seat on Lufthansa flight LH432 ... The first parameter is called as we do it with the call() method. And the second have to bi in array. Otherwise will throw an error:

// book.apply(lufthansa, 987, 'Peshovica'); // Uncaught TypeError: CreateListFromArrayLike called on non-object

// Anyway, the apply() method is old way to using. Now actualy we can use  the call() to with array parameter:
book.call(eurowings, ...flightData); // Ivan Ivanov booked a seat on Eurowings flight EW432 ... We just have to remembrt to use the array with spread operator. Cool!

//////////////// Conclusion /////////////////////////
// The call and apply methods are involced imidietly. In bind.js wii see how to use bind() method ...
