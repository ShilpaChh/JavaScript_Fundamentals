// CH 6 - Challenge:

function fizzbuzzUntil(num) {
    for (let i = 0; i < num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if(i % 3 == 0) {
            console.log("Fizz");
        } else if(i % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzbuzzUntil;


// o/p:
// ➜  bites git:(main) node
// Welcome to Node.js v20.3.1.
// Type ".help" for more information.
// > const fizzbuzzUntil = require("./fizzbuzzUntil")
// undefined
// > fizzbuzzUntil(10)
// FizzBuzz
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// undefined