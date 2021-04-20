'strict mode';

const flight = 'LH234';
const pesho = {
  fullName: 'Pesho Pichagata',
  passport: 363238123412,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.fullName = 'Mr. ' + passenger.fullName;
  if (passenger.passport === 363238123412) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
  console.log(flightNum); // LH999
  console.log(flight); // LH234

  console.log(passenger.fullName); // Mr. Pesho Pichagata
  console.log(pesho.fullName); // Mr. Pesho Pichagata
};

checkIn(flight, pesho);
// So what happen here? we called the function with the arguments 'flight' and 'pesho'. In the function we changed the value of the arguments. So i put the console.logs only to check what happen with "flight's" and "pesho's" values. Did they changed and why ? So 'flight isn't changed but 'pesho' is. So first lets see why 'flight' is not changed ... Because its a primitive value (string). And we know that when we try to pass a primitive to another the data storage create ther personal memory space . In other words they can not use one memory space (they can not be passing by reference). ... Now lets see the 'pesho' result ... So pesho is reference value (cause its object). That means when we try to passing a reference value to another they share one value because when passing them , both of them points to the memory adress where is the value stays.

// Conclusion - when we tallk about passing by reference and passing by value we have to know that Javascript have passing by value ONLY. Even if we manipulate object there is no passing by reference because when try to make copy object we send ti to value that keeps number of the memory storage.
