// Ch 4 - Challenge - 2. Define a function multiply (in a file multiply.js) which takes two arguments and return their product.
function multiply(num1, num2) {
    return `${num1 * num2}`;
  }
  
  console.log("Result via a function: " + multiply(12, 2));

//   o/p:
//   ➜  bites git:(main) ✗ node multiply.js 
// Result via a function: 24

// function add(a, b) {
//     return a + b;
//   }
  
//   // equivalent to
//   const add = (a, b) => {
//     return a + b;
//   }
  
//   // also equivalent to
//   var add = function (a, b) {
//     return a + b;
//   }

// Ch 4- Challenge: 

function A(x) {
    function B(y) {
      function C(z) {
        console.log(x * (y + z));
      }
      C(4);
    }
    B(4);
  }
  A(2); 