// Ch 9 - Exercise1:

const names = ['Rahul', 'Harshita', 'Meghna'];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(names.length);

// o/p:
// ➜  bites git:(main) ✗ node nameArray.js
// Rahul
// Harshita
// Meghna
// 3

console.log(names.concat('Shilpa')); // TO ADD ANOTHER NAME for e.g. TO AN ARRAY, USE CONCAT
console.log(names[3]);
console.log(names.length);

// ➜  bites git:(main) ✗ node nameArray.js
// Rahul
// Harshita
// Meghna
// 3
// [ 'Rahul', 'Harshita', 'Meghna', 'Shilpa' ]
// undefined
// 3

// TO SAVE THIS NEW NAME IN THE ARRAY, WE NEED TO HAVE NEW ARRAY:
const newNames = names.concat('Shilpa');
console.log(names);
console.log(names.length);
console.log(newNames);
console.log(newNames.length);

// o/p:
// ➜  bites git:(main) ✗ node nameArray.js
// Rahul
// Harshita
// Meghna
// 3
// [ 'Rahul', 'Harshita', 'Meghna', 'Shilpa' ]
// undefined
// 3
// [ 'Rahul', 'Harshita', 'Meghna' ]
// 3
// [ 'Rahul', 'Harshita', 'Meghna', 'Shilpa' ]
// 4

