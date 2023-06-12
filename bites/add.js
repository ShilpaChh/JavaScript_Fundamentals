// Ex 2 - Challenge
// Run a JavaScript file that logs the result of 2 + 2 in the console.

const result = 2 + 2 // shows this variable won't change later -- it's constant and can't be modified by anyone. 
// can use 'let' to change result later 

console.log("Result: " + result);

// Ch 3 Exercise
// In the node REPL, declare two variables — a with value 4 and b with value 6.
// Using console.log, print the result of:
// a + b (should print 10)
// a * b (should print 24)

a = 4
b = 6

console.log("Value of a is " + a)
console.log("Value of b is " + b)
console.log(a + b)
console.log(a * b)


// Ch 4 - Challenge - 1. Define a function add (in a file add.js) which takes two arguments and return their sum.
function add(num1, num2) {
  return `${num1 + num2}`;
}

console.log("Result via a function: " + add(12, 2));

// OUTPUTS:
// ➜  bites git:(main) ✗ node add.js
// Result: 4
// Value of a is 4
// Value of b is 6
// 10
// 24
// Result via a function: 14
