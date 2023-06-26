// ODD EVEN NUMBERS THRU FUNCTION: E.G. 3

const getParity = (number) => {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

for (let i = 0 ; i <= 7 ; i++){
    const parity = getParity(i);
    console.log(`${i} is ${parity}`);
}

// o/p:
// ➜  bites git:(main) ✗ node oddEvenNumber3.js
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// 6 is even
// 7 is odd