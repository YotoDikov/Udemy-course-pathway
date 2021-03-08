const arr = [5, 6, 7];

// What if we want to make new array which contains the 'arr' but 1 and 2 before that? For example:
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // [1, 2, 5, 6, 7] Realy bad way ...

// better way:
const newArr = [1, 2, ...arr]; // [1, 2, 5, 6, 7] Better

//So what spread operator actualy do? It's wrhite the elements from the array individualy. For example - "const anotherArr = [3, arr[0], arr[1], arr[2]]" is  similar to "const anotherArr = [3, ...arr]"... The stread operato wrhites the elements in the new array one by one separated by coma.

// another example
console.log(...newArr); // 1 2 5 6 7 ... When we console.log() with spread operator it returns the elements from the array one by one without square brackets. this example is similar to:
console.log(1, 2, 5, 6, 7); // 1, 2, 5, 6, 7
