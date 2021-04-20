'use strict';

const person = {
  fNAme: 'Pesho',
  hobbies: {
    sport: 'Football',
    art: 'Painting',
  },
  callProps(props) {
    console.log(props);
  },
};

// without optional chaining
if (person.friends) {
  console.log(person.friends.bestOne);
}

// with optional chaining:
console.log(person.friends?.bestOne); // undefined ... So what's that sintax means? It means if person.friends exist - after that we put '?' just like ternar operator - So if exists then we can read '.bestOne' property. Otherwise it will return undefined immediately. Ant just to say: A property exists only if its not null or undefined (the nullish concept)

// we can have optional chainings multiple times:
console.log(person.friends?.bestOne?.age); // if person.friends exists then check if person.friends.bestOne also exist and if it is the add .age

person.callProps?.(person.fNAme) ?? 'method does not exist'; // If person.callProps exists the add 'person.fNAme' as argument on this method. And now do you remember what this '??' operator means? It means if "person.callProps?.(person.fNAme)" this one = null or undefined then return this message: "method does not exist"

/////////// Looping Objects: Object keys, values, and entries ///////////////

const entries = Object.entries(person);

for (const [key, val] of entries) {
  console.log(key, val); //fNAme Pesho \n  hobbies \n callProps ƒ callProps (props) { console.log(props); }
}
