// Ch - 11
// ARRAY MAP METHOD:

const numbers = [1, 2, 3, 4];

console.log(numbers.map((number) => {
  return 'a';
}));

// this replaces existing character with new element and generates a new array
// ➜  bites git:(main) ✗ node mapMethod.js
// [ 'a', 'a', 'a', 'a' ]

console.log(numbers.map((number) => {
    return number;
  }));

//   This returns the same array without replacing as seen in above eg
//   ➜  bites git:(main) ✗ node mapMethod.js
// [ 'a', 'a', 'a', 'a' ]
// [ 1, 2, 3, 4 ]

console.log(numbers.map((number) => {
    return number + 1;
  }));

//   ➜  bites git:(main) ✗ node mapMethod.js
// [ 'a', 'a', 'a', 'a' ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ] => adds +1 and creates a new array

console.log(numbers.map((number) => {
    return number * number;
  }));

//   ➜  bites git:(main) ✗ node mapMethod.js
// [ 'a', 'a', 'a', 'a' ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]
// [ 1, 4, 9, 16 ] => To find square of the number