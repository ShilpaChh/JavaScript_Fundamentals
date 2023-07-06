const Candy = require('./candy');
const myCandy = new Candy('Mars', 3.99);

describe('Candy', () => {
  it('returns the name of the candy', () => {
    expect(myCandy.name).toEqual('Mars');
  });
  it('returns the price of the candy', () => {
    expect(myCandy.price).toEqual(3.99);
  });
});


// ➜  PhaseTwo git:(main) jest candy.test.js                
// PASS  ./candy.test.js
//  Candy
//    ✓ returns the name of the candy (1 ms)
//    ✓ returns the price of the candy

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.176 s
// Ran all test suites matching /candy.test.js/i.
// ➜  PhaseTwo git:(main) ✗ node
// Welcome to Node.js v20.3.1.
// Type ".help" for more information.
// > const Candy = require('./candy');
// undefined
// > const myCandy = new Candy('Mars', 3.99);
// undefined
// > myCandy.name
// 'Mars'
// > myCandy.price
// 3.99
// > 