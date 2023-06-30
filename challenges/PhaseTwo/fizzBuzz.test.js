const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('Checks divisibility of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('Checks divisibility of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('Checks divisibility of 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });

  it('Checks divisibility of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('Checks divisibility of 18', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });

  it('Checks divisibility of 20', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });

});



// ➜  PhaseTwo git:(main) ✗ jest fizzBuzz.test.js
//  PASS  ./fizzBuzz.test.js
//   fizzBuzz
//     ✓ Checks divisibility of 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.163 s
// Ran all test suites matching /fizzBuzz.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest fizzBuzz.test.js
//  FAIL  ./fizzBuzz.test.js
//   fizzBuzz
//     ✓ Checks divisibility of 3 (1 ms)
//     ✕ Checks divisibility of 5 (1 ms)

//   ● fizzBuzz › Checks divisibility of 5

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Buzz"
//     Received: "Fizz"

//        7 |
//        8 |   it('Checks divisibility of 5', () => {
//     >  9 |     expect(fizzBuzz(3)).toBe('Buzz');
//          |                         ^
//       10 |   });
//       11 |
//       12 | });

//       at Object.toBe (fizzBuzz.test.js:9:25)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.174 s, estimated 1 s
// Ran all test suites matching /fizzBuzz.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest fizzBuzz.test.js
//  PASS  ./fizzBuzz.test.js
//   fizzBuzz
//     ✓ Checks divisibility of 3 (1 ms)
//     ✓ Checks divisibility of 5

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s
// Ran all test suites matching /fizzBuzz.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest fizzBuzz.test.js
//  PASS  ./fizzBuzz.test.js
//   fizzBuzz
//     ✓ Checks divisibility of 3 (1 ms)
//     ✓ Checks divisibility of 5 (1 ms)
//     ✓ Checks divisibility of 8

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.162 s, estimated 1 s
// Ran all test suites matching /fizzBuzz.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest fizzBuzz.test.js
//  PASS  ./fizzBuzz.test.js
//   fizzBuzz
//     ✓ Checks divisibility of 3 (1 ms)
//     ✓ Checks divisibility of 5
//     ✓ Checks divisibility of 8
//     ✓ Checks divisibility of 15

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        0.16 s, estimated 1 s
// Ran all test suites matching /fizzBuzz.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest fizzBuzz.test.js
//  PASS  ./fizzBuzz.test.js
//   fizzBuzz
//     ✓ Checks divisibility of 3
//     ✓ Checks divisibility of 5
//     ✓ Checks divisibility of 8
//     ✓ Checks divisibility of 15
//     ✓ Checks divisibility of 18

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.161 s, estimated 1 s
// Ran all test suites matching /fizzBuzz.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest fizzBuzz.test.js
//  PASS  ./fizzBuzz.test.js
//   fizzBuzz
//     ✓ Checks divisibility of 3 (1 ms)
//     ✓ Checks divisibility of 5
//     ✓ Checks divisibility of 8
//     ✓ Checks divisibility of 15 (1 ms)
//     ✓ Checks divisibility of 18
//     ✓ Checks divisibility of 20

// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s
// Ran all test suites matching /fizzBuzz.test.js/i.