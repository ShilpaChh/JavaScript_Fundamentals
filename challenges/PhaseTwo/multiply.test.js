const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 10 and 2', () => {
    expect(multiply(10, 2)).toBe(20);
  });

});


// ➜  PhaseTwo git:(main) ✗ jest multiply.test.js
//  PASS  ./multiply.test.js
//   multiply
//     ✓ multiplies 10 and 2 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.17 s
// Ran all test suites matching /multiply.test.js/i.