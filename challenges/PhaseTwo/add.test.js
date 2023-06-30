// file: add.test.js

const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('adds different numbers', () => {
    expect(add(-8, 1)).toBe(-7);
  });

  it('adds floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
    expect(value).toBeGreaterThan(0);
    expect(value).toBeGreaterThanOrEqual(0.2);
    expect(value).toBeLessThan(1);
    expect(value).toBeLessThanOrEqual(1.5);
  });

// toBe uses Object.is to test exact equality. If you want to check the value of an object, 
// use toEqual:
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
//   toEqual recursively checks every field of an object or array.

// TIP
// toEqual ignores object keys with undefined properties, undefined array items, array sparseness, 
// or object type mismatch. To take these into account use toStrictEqual instead.

  it('checks positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

});

// PhaseTwo git:(main) ✗ pwd
// /Users/shilpachhabra/LearnNewLang_JS/JavaScriptFundamentals/javascript-fundamentals/challenges/PhaseTwo
// ➜  PhaseTwo git:(main) ✗ jest add.test.js
//  FAIL  ./add.test.js
//   add
//     ✓ adds 2 and 2 (1 ms)
//     ✓ adds different numbers
//     ✕ adds floating point numbers (1 ms)
//     ✓ object assignment (1 ms)
//     ✓ checks positive numbers is not zero (4 ms)

//   ● add › adds floating point numbers

//     expect(received).toBeGreaterThanOrEqual(expected)

//     Expected: >= 1.2
//     Received:    0.30000000000000004

//       17 |     expect(value).toBeCloseTo(0.3); // This works.
//       18 |     expect(value).toBeGreaterThan(0);
//     > 19 |     expect(value).toBeGreaterThanOrEqual(1.2);
//          |                   ^
//       20 |     expect(value).toBeLessThan(1);
//       21 |     expect(value).toBeLessThanOrEqual(1.5);
//       22 |   });

//       at Object.toBeGreaterThanOrEqual (add.test.js:19:19)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 4 passed, 5 total
// Snapshots:   0 total
// Time:        0.184 s, estimated 1 s
// Ran all test suites matching /add.test.js/i.
// ➜  PhaseTwo git:(main) ✗ jest add.test.js
//  PASS  ./add.test.js
//   add
//     ✓ adds 2 and 2 (1 ms)
//     ✓ adds different numbers
//     ✓ adds floating point numbers (1 ms)
//     ✓ object assignment
//     ✓ checks positive numbers is not zero (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.14 s, estimated 1 s
// Ran all test suites matching /add.test.js/i.
// ➜  PhaseTwo git:(main) ✗ 