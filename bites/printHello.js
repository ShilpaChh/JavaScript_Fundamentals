// Ch 8
// EG 1 - USE `setTimeout` to execute this function after a 3 seconds delay

const printHello = () => {
    console.log("Hello!")
}

console.log(printHello());

// [Function: printHello]
// ➜  bites git:(main) ✗ node printHello.js
// Hello!
// undefined

setTimeout(printHello, 1000);

// o/p:
// ➜  bites git:(main) ✗ node printHello.js
// Hello!
// undefined
// ** DELAY of 1 sec **
// Hello!


// EG 2 - DECLARE A FUNCTION 'executeAfterDelay' which calls the given function after the given 
// delay in seconds.


const executeAfterDelay = (delay, func) => {
    setTimeout(func, delay * 1000)
}

executeAfterDelay(5, printHello);  
// delay of 5 seconds

// o/p:
// ➜  bites git:(main) ✗ node printHello.js
// Hello!
// undefined
// ** DELAY of 1 sec => eg 1 **
// Hello!
// ** DELAY of 1 sec => eg 2 **
// Hello!