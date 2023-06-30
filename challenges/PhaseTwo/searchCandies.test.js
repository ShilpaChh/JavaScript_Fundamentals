const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    
  it("returns candies with prefix 'Ma' and maximum price: 10", () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it("returns candies with prefix 'Ma' and maximum price: 2", () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it("returns candies with prefix 'S' and maximum price: 10", () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it("returns candies with prefix 'S' and maximum price: 4", () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it("returns candies with prefix 'Ma' and maximum price: 5", () => {
    expect(searchCandies('Ma', 5)).toEqual(['Mars', 'Maltesers']);
  });

  it("returns candies with prefix 'P' and maximum price: 10", () => {
    expect(searchCandies('P', 5)).toEqual(['Pastila']);
  });

  it('returns candies with prefix Q and maximum price: 10', () => {
    expect(searchCandies('Q', 10)).toEqual([]);
  });

  it("returns candies with prefix 'Ma' and maximum price: -2", () => {
    expect(searchCandies('Ma', -2)).toEqual([]);
  });

  it('returns candies regardless of case', () => {
    expect(searchCandies('ma', 11)).toEqual(['Mars', 'Maltesers']);
  });

});


// ➜  PhaseTwo git:(main) ✗ jest searchCandies.test.js 
//  PASS  ./searchCandies.test.js
//   searchCandies
//     ✓ returns candies with prefix 'Ma' and maximum price: 5 (1 ms)
//     ✓ returns candies with prefix 'P' and maximum price: 10
//     ✓ returns candies with prefix Q and maximum price: 10 (1 ms)
//     ✓ returns candies with prefix 'Ma' and maximum price: -2
//     ✓ returns candies regardless of case

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.177 s
// Ran all test suites matching /searchCandies.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest searchCandies.test.js
//  PASS  ./searchCandies.test.js
//   searchCandies
//     ✓ returns candies with prefix 'Ma' and maximum price: 10 (1 ms)
//     ✓ returns candies with prefix 'Ma' and maximum price: 5
//     ✓ returns candies with prefix 'P' and maximum price: 10
//     ✓ returns candies with prefix Q and maximum price: 10
//     ✓ returns candies with prefix 'Ma' and maximum price: -2
//     ✓ returns candies regardless of case

// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        0.172 s, estimated 1 s
// Ran all test suites matching /searchCandies.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest searchCandies.test.js
//  PASS  ./searchCandies.test.js
//   searchCandies
//     ✓ returns candies with prefix 'Ma' and maximum price: 10 (1 ms)
//     ✓ returns candies with prefix 'Ma' and maximum price: 2
//     ✓ returns candies with prefix 'Ma' and maximum price: 5
//     ✓ returns candies with prefix 'P' and maximum price: 10
//     ✓ returns candies with prefix Q and maximum price: 10
//     ✓ returns candies with prefix 'Ma' and maximum price: -2
//     ✓ returns candies regardless of case

// Test Suites: 1 passed, 1 total
// Tests:       7 passed, 7 total
// Snapshots:   0 total
// Time:        0.165 s, estimated 1 s
// Ran all test suites matching /searchCandies.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest searchCandies.test.js
//  FAIL  ./searchCandies.test.js
//   searchCandies
//     ✓ returns candies with prefix 'Ma' and maximum price: 10 (1 ms)
//     ✓ returns candies with prefix 'Ma' and maximum price: 2
//     ✕ returns candies with prefix 'S' and maximum price: 10 (2 ms)
//     ✓ returns candies with prefix 'Ma' and maximum price: 5
//     ✓ returns candies with prefix 'P' and maximum price: 10
//     ✓ returns candies with prefix Q and maximum price: 10
//     ✓ returns candies with prefix 'Ma' and maximum price: -2
//     ✓ returns candies regardless of case

//   ● searchCandies › returns candies with prefix 'S' and maximum price: 10

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 3

//       Array [
//     -   "Mars",
//     -   "Maltesers",
//     +   "Skitties",
//     +   "Skittles",
//     +   "Starburst",
//       ]

//       12 |
//       13 |   it("returns candies with prefix 'S' and maximum price: 10", () => {
//     > 14 |     expect(searchCandies('S', 10)).toEqual(['Mars', 'Maltesers']);
//          |                                    ^
//       15 |   });
//       16 |
//       17 |   it("returns candies with prefix 'Ma' and maximum price: 5", () => {

//       at Object.toEqual (searchCandies.test.js:14:36)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 7 passed, 8 total
// Snapshots:   0 total
// Time:        0.189 s, estimated 1 s
// Ran all test suites matching /searchCandies.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest searchCandies.test.js
//  PASS  ./searchCandies.test.js
//   searchCandies
//     ✓ returns candies with prefix 'Ma' and maximum price: 10 (1 ms)
//     ✓ returns candies with prefix 'Ma' and maximum price: 2
//     ✓ returns candies with prefix 'S' and maximum price: 10
//     ✓ returns candies with prefix 'Ma' and maximum price: 5 (1 ms)
//     ✓ returns candies with prefix 'P' and maximum price: 10
//     ✓ returns candies with prefix Q and maximum price: 10
//     ✓ returns candies with prefix 'Ma' and maximum price: -2 (1 ms)
//     ✓ returns candies regardless of case

// Test Suites: 1 passed, 1 total
// Tests:       8 passed, 8 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s
// Ran all test suites matching /searchCandies.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest searchCandies.test.js
//  PASS  ./searchCandies.test.js
//   searchCandies
//     ✓ returns candies with prefix 'Ma' and maximum price: 10 (1 ms)
//     ✓ returns candies with prefix 'Ma' and maximum price: 2
//     ✓ returns candies with prefix 'S' and maximum price: 10
//     ✓ returns candies with prefix 'S' and maximum price: 4
//     ✓ returns candies with prefix 'Ma' and maximum price: 5
//     ✓ returns candies with prefix 'P' and maximum price: 10
//     ✓ returns candies with prefix Q and maximum price: 10
//     ✓ returns candies with prefix 'Ma' and maximum price: -2
//     ✓ returns candies regardless of case

// Test Suites: 1 passed, 1 total
// Tests:       9 passed, 9 total
// Snapshots:   0 total
// Time:        0.166 s, estimated 1 s
// Ran all test suites matching /searchCandies.test.js/i.
// ➜  PhaseTwo git:(main) ✗ 