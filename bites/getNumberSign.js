// javascript-fundamentals/bites/05_conditionals.md

// Exercise:
// > getNumberSign(3);
// 'positive'
// > getNumberSign(0);
// 'zero'
// > getNumberSign(-5);
// 'negative'

const getNumberSign = (number) => {
    if (number === 0) {
        return 'zero';
    } else if (number > 0){
        return 'positive';
    } else {
        return 'negative';
    }
}

console.log("Number sign for 0 is: " + getNumberSign(0));
console.log("Number sign for 3 is: " + getNumberSign(3));
console.log("Number sign for -5 is: " + getNumberSign(-5));

// o/p:
// ➜  javascript-fundamentals git:(main) ✗ cd bites
// ➜  bites git:(main) ✗ node getNumberSign.js
// zero
// positive
// negative
// ➜  bites git:(main) ✗ node getNumberSign.js
// Number sign for 0 is: zero
// positive
// negative
// ➜  bites git:(main) ✗ node getNumberSign.js
// Number sign for 0 is: zero
// Number sign for 3 is: positive
// Number sign for -5 is: negative