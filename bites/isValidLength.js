const isValidLength = (phoneNumber) => {
    if (phoneNumber.length === 11) {
      return true;
    } else {
      return false;
    }
  }


console.log("Check if phone number, 00 is valid: ", isValidLength('00'));
console.log("Check if phone number, 00112233445 is valid: ", isValidLength('00112233445'));

// o/p:
// ➜  bites git:(main) ✗ node isValidLength.js
// Check if phone number, 00 is valid: false
// Check if phone number, 00112233445 is valid: true


// ANOTHER WAY THRU MODULE EXPORT AND THEN REQUIRING IT ===>
// const isValidLength = (phoneNumber) => {
//     const validLength = 11;
//     if (phoneNumber.length == validLength) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   module.exports = isValidLength;


// o/p:
//   ➜  bites git:(main) ✗ node
// Welcome to Node.js v20.3.1.
// Type ".help" for more information.
//   > const isValidLength = require("./isValidLength")
// undefined
// > isValidLength('00');
// false
// > isValidLength('07554127343');
// true
