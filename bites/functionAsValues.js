// copy to a file called functionsAsValues.js
// This is a function. It has no name and no parameters
() => {
    return 123;
  }
  // This is a function with one parameter, but still no name
  // And using briefer syntax that might help when we get to .map and .filter
  (n) => 2*n
  // you can see that it is a function like this
  console.log((n) => 2*n)

//   o/p:
//   ➜  bites git:(main) ✗ node functionAsValues.js 
// [Function (anonymous)]

const doubleNumber = (n) => 2*n
console.log(doubleNumber)

// o/p:
// ➜  bites git:(main) ✗ node functionAsValues.js
// [Function (anonymous)]
// [Function: doubleNumber]

const simpleCalculation = doubleNumber
console.log(simpleCalculation)

// o/p:
// ➜  bites git:(main) ✗ node functionAsValues.js
// [Function (anonymous)]
// [Function: doubleNumber]
// [Function: doubleNumber]

const doubleNumber1 = (n) => 2*n
let newSalary = doubleNumber1(1000000)
console.log(doubleNumber1)

// o/p:
// ➜  bites git:(main) ✗ node functionAsValues.js
// [Function (anonymous)]
// [Function: doubleNumber]
// [Function: doubleNumber]
// [Function: doubleNumber1]

