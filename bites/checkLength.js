// Ch - 11 - Exercise:
// Questions
// 1. Declare a function checkLength that takes a phone number (as a string) as argument, and 
// returns true if this phone number contains 10 characters or less.
// 2. Now declare a function filterLongNumbers that takes an array of phone numbers. This function 
// should return only numbers that contain 10 characters or less. It should make use of the function 
// checkLength written previously.

// Q1:
const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true;
    } else {
        return false;
    }
}

console.log(checkLength('1763687364'));
// ➜  bites git:(main) ✗ node checkLength.js 
// true

console.log(checkLength('4763687363'));
console.log(checkLength('7867867862'));
console.log(checkLength('AAAA#####AAAA#87@768767382672'));
console.log(checkLength('4790687363'));

// ➜  bites git:(main) ✗ node checkLength.js
// true
// true
// true
// false
// true

// Q2:
const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const filterLongNumbers = (number) => {
    return number.filter(checkLength);
}

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers(['4763687363', '7867867862']));
console.log(filterLongNumbers(['4903687363', '7127867862', '7463276765763765762']));
console.log(filterLongNumbers([]));

// ➜  bites git:(main) ✗ node checkLength.js
// true
// true
// true
// false
// true
// [ '1763687364', '4763687363', '7867867862' ]
// [ '4763687363', '7867867862' ]
// []

