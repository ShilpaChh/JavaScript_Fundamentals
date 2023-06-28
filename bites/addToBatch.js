const addToBatch = (array, num) => {
    if(array.length >= 5){
        return array;
    } else {
        return array.concat(num);
    }
}

console.log(addToBatch([1], 3));
console.log(addToBatch([1, 2, 3], 4));
console.log(addToBatch([], 8));
console.log(addToBatch(['Array', 'More', 'Than', 'Five', 'Remains', 'Untouched'], 5));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));


// o/p:
// ➜  bites git:(main) ✗ node addToBatch.js
// ➜  bites git:(main) ✗ node addToBatch.js
// [ 1, 3 ]
// [ 1, 2, 3, 4 ]
// [ 8 ]
// [ 'Array', 'More', 'Than', 'Five', 'Remains', 'Untouched' ]
// [ 1, 2, 3, 4, 5, 6 ]
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]