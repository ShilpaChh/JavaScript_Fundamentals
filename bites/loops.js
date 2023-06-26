// FOR loop:

console.log("FOR loop eg: ");
for (let i = 0 ; i <= 10 ; i++){
    console.log(i);
}

// o/p: 
// ➜  bites git:(main) ✗ node loops.js
// FOR loop eg: 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// WHILE loop:

console.log("WHILE loop eg: ");

let counter = 10;
while (counter <= 15) {
    console.log(counter);

    counter ++;
}


// WHILE loop eg: 
// 10
// 11
// 12
// 13
// 14
// 15


// ODD OR EVEN NUMBER: E.G. 1
console.log("Odd or Even number: ")
for (let i = 16 ; i <= 23 ; i++){
    if (i % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd');
    }
} 

// o/p:
// Odd or Even number: 
// even
// odd
// even
// odd
// even
// odd
// even
// odd


// ODD OR EVEN NUMBER BY INTERPOLATION: E.G. 2
console.log("Odd or Even number: ")
for (let i = 16 ; i <= 23 ; i++){
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`);
    }
} 

// o/p:
// Odd or Even number: 
// 16 is even
// 17 is odd
// 18 is even
// 19 is odd
// 20 is even
// 21 is odd
// 22 is even
// 23 is odd