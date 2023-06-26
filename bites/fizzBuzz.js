// Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as 
// argument, and then either:

// Return "Fizz" if this number is divisible by 3.
// Return "Buzz" if this number is divisible by 5.
// Return "FizzBuzz" if this number is divisible by both 5 and 3.
// Otherwise, Return the number itself.

const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 5 === 0){
        return "Buzz";
    } else if (number % 3 === 0){
        return "Fizz";
    } else {
        return number;
    }
}

console.log("Check divisibility of 3: ", fizzBuzz(3));
console.log("Check divisibility of 5: ", fizzBuzz(5));
console.log("Check divisibility of 8: ", fizzBuzz(8));
console.log("Check divisibility of 15: ", fizzBuzz(15));
console.log("Check divisibility of 18: ", fizzBuzz(18));
console.log("Check divisibility of 20: ", fizzBuzz(20));

// o/p:
// ➜  bites git:(main) ✗ node fizzBuzz.js
// Check divisibility of 3:  Fizz
// Check divisibility of 5:  Buzz
// Check divisibility of 8:  8
// Check divisibility of 15:  FizzBuzz
// Check divisibility of 18:  Fizz
// Check divisibility of 20:  Buzz

// ANOTHER WAY:
// function fizzBuzz(num) {
//     if(num % 3 == 0 && num % 5 ==0){
//         return "FizzBuzz";
//     } else if(num % 3 == 0){
//         return "Fizz";
//     } else if(num % 5 == 0){
//         return "Buzz";
//     } else {
//         return num;
//     }
// }

// module.exports = fizzBuzz;

// o/p:
// ➜  bites git:(main) ✗ node
// Welcome to Node.js v20.3.1.
// Type ".help" for more information.
// > const fizzBuzz = require("./fizzBuzz")
// undefined
// > fizzBuzz(3); 
// 'Fizz'
// > fizzBuzz(5);
// 'Buzz'
// > fizzBuzz(8);
// 8
// > fizzBuzz(15);
// 'FizzBuzz'
// > fizzBuzz(18);
// 'Fizz'
// > fizzBuzz(20);
// 'Buzz'