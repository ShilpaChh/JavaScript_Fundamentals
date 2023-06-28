const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => { 
    // we are passing an anonymous function, number, as an argument here
    // and this function needs to be called forEach element of the array.
    // The forEach() method executes a provided function once for each array element.
 console.log(number);
 });

//  ➜  bites git:(main) ✗ node numbers.js 
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

const iteratorFunction = (number) => {
    console.log(number);
}

console.log(numbers.forEach(iteratorFunction));

// ➜  bites git:(main) ✗ node numbers.js 
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
// undefined

// TO CALCULATE SUM OF ALL THE NUMBERS, USE let INSTEAD OF const AS WE NEED TO MODIFY THIS VARIABLE 
// AS WE GO ALONG
let sum = 0;
numbers.forEach((number) => {
    sum += numbers

    numbers.forEach((number) => {
        sum += number
    });
});

console.log(sum);


