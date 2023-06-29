// Ch - 11: You'll now learn about two methods we use on arrays:

// filter to create a new array by applying a predicate function on existing array's elements.
// map to create a new array by applying a specific operation to the existing array's elements.

const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}

const namesShorterThanThreeLetters = console.log(names.filter(isShorterThanThree));

// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

const getUppercased = (name) => {
  return name.toUpperCase();
}

const uppercasedNames = console.log(names.map(getUppercased));


// o/p:
// ➜  bites git:(main) ✗ node array.js
// [ 'Li', 'Jo' ]
// [ 'ANNA', 'LI', 'CHARLIE', 'MARY', 'JO' ]

//  CH - 11 Exercise - personalised messages
// Write a function generateMessages that takes an array of names and returns an array of 
// personalised messages for each name. For example, when given the array above, the function should 
// return an array with the first element being the string 'Hi Anna! 50% off our best candies for you 
// today!', the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.

const message = (name) => {
  console.log(`Hi ${name}! 50% off our best candies for you today!`);
};

const generateMessages = (names) => {
  names.map(message);
};

generateMessages(names);

// ➜  bites git:(main) ✗ node array.js
// [ 'Li', 'Jo' ]
// [ 'ANNA', 'LI', 'CHARLIE', 'MARY', 'JO' ]
// Hi Anna! 50% off our best candies for you today!
// Hi Li! 50% off our best candies for you today!
// Hi Charlie! 50% off our best candies for you today!
// Hi Mary! 50% off our best candies for you today!
// Hi Jo! 50% off our best candies for you today!

