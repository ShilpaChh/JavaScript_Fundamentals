const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];
  
const message = (object) => {
    console.log(`Hi ${object.name}! ${object.discount}% off our best candies for you today!`);
};

const generateMessages = (array) => {
array.map(message);
};

generateMessages(namesAndDiscounts);

// o/p:
// ➜  bites git:(main) ✗ pwd
// /Users/shilpachhabra/LearnNewLang_JS/JavaScriptFundamentals/javascript-fundamentals/bites
// ➜  bites git:(main) ✗ node generateMessages.js
// Hi Anna! 50% off our best candies for you today!
// Hi Laura! 40% off our best candies for you today!
// Hi Josh! 30% off our best candies for you today!
// Hi Min! 50% off our best candies for you today!
// Hi Karla! 60% off our best candies for you today!

