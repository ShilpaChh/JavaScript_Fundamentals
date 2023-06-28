// CH 9:

// Assign an array to the constant numbers
const numbers = [1, 2, 3, 4];

const newNumbers = numbers.concat(5); // adds one element and return a new array

// We can access elements with []
console.log(numbers[0]); // 1

console.log(numbers); // [1, 2, 3, 4]

console.log(newNumbers) // [1, 2, 3, 4, 5]

console.log(numbers.length) // 4

console.log(newNumbers.length) // 5

// Loop through the array and execute code for each element
numbers.forEach((number) => {
  console.log(number);
})


// o/p:
// ➜  bites git:(main) node newNumbers.js 
// 1
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4, 5 ]
// 4
// 5
// 1
// 2
// 3
// 4