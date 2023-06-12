// Ch 4 - Exercise
// Define (in a file sayHello.js) the function sayHello, which returns the string 'Hello'.

// Require and call that function in node - you should get the following result:
// > sayHello();
// 'Hello'

// const sayHello = () => {
//     return 'Hello';
// }
// console.log(sayHello());

// o/p:
// ➜  bites git:(main) ✗ node sayHello.js 
// Hello

const sayHello = (name) => {
    return 'Hello ' + name;
}

module.exports = sayHello; 

// exports the function to use outside and the requite in.
// In JavaScript, to use a function outside of the file it is defined in, we need to "export" it using module.exports:
// Then we can "require" it from another file, or from the node REPL:
    // o/p:
    // ➜  bites git:(main) ✗ node
    // Welcome to Node.js v20.2.0.
    // Type ".help" for more information.
    // > const sayHello = require('./sayHello')
    // undefined
    // > sayHello
    // [Function: sayHello]
    // > sayHello('Shilpa')
    // 'Hello Shilpa'