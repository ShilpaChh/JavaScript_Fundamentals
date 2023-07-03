
    - Array [
    -   3,
    - ]
    + Array []

      41 |   it('shows Total Items in the basket', () => {
      42 |     myBasket.showItem();
    > 43 |     expect(myBasket.showItem()).toEqual([3]);
         |                                 ^
      44 |   });
      45 |
      46 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:43:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.198 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket
    ✓ shows Total Price of the basket (1 ms)
    ✓ adds a candy to the basket
    ✕ shows Total Items in the basket (2 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket (1 ms)
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      41 |   it('shows Total Items in the basket', () => {
      42 |     myBasket.showItem();
    > 43 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      44 |   });
      45 |
      46 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:43:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.154 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket (1 ms)
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket (1 ms)
    ✕ shows Total Items in the basket (1 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket (1 ms)

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toContain(expected) // indexOf

    Expected value: [1]
    Received array: []

      41 |   it('shows Total Items in the basket', () => {
      42 |     myBasket.showItem();
    > 43 |     expect(myBasket.showItem()).toContain([1]);
         |                                 ^
      44 |   });
      45 |
      46 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toContain (shoppingBasket.test.js:43:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.2 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name
    ✓ gets candy price
    ✓ shows Total Items in the basket (1 ms)
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket
    ✕ shows Total Items in the basket (1 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket (1 ms)
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toContain(expected) // indexOf

    Expected value: []
    Received array: []

      41 |   it('shows Total Items in the basket', () => {
      42 |     myBasket.showItem();
    > 43 |     expect(myBasket.showItem()).toContain([]);
         |                                 ^
      44 |   });
      45 |
      46 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toContain (shoppingBasket.test.js:43:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.186 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket (1 ms)
    ✕ shows Total Items in the basket (2 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket (1 ms)

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      41 |   it('shows Total Items in the basket', () => {
      42 |     myBasket.showItem();
    > 43 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      44 |   });
      45 |
      46 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:43:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.156 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (3 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket (1 ms)
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket (1 ms)
    ✕ shows Total Items in the basket (2 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket (1 ms)
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      41 |   it('shows Total Items in the basket', () => {
      42 |     myBasket.showItem();
    > 43 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      44 |   });
      45 |
      46 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:43:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.167 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ node
Welcome to Node.js v20.3.1.
Type ".help" for more information.
> 
➜  PhaseTwo git:(main) ✗ pwd
/Users/shilpachhabra/LearnNewLang_JS/JavaScriptFundamentals/javascript-fundamentals/challenges/PhaseTwo
➜  PhaseTwo git:(main) ✗ ls
add.js                 candy.js               fizzBuzz.test.js       multiply.test.js       package-lock.json      searchCandies.js       shoppingBasket.js
add.test.js            fizzBuzz.js            multiply.js            node_modules           package.json           searchCandies.test.js  shoppingBasket.test.js
➜  PhaseTwo git:(main) ✗ node
Welcome to Node.js v20.3.1.
Type ".help" for more information.
> const Candy = require('./candy');
undefined
> const ShoppingBasket = require('./shoppingBasket');
undefined
> const Candy = require('./candy');
Uncaught SyntaxError: Identifier 'Candy' has already been declared
> const ShoppingBasket = require('./shoppingBasket');
Uncaught SyntaxError: Identifier 'ShoppingBasket' has already been declared
> const myBasket = new ShoppingBasket();
undefined
> myBasket
ShoppingBasket { totalPrice: 0, items: [] }
> const candy = new Candy('Mars', 4.99);
undefined
> candy.getPrice();
4.99
> myBasket.addItem("Mars");
Uncaught TypeError: item.getPrice is not a function
    at ShoppingBasket.addItem (/Users/shilpachhabra/LearnNewLang_JS/JavaScriptFundamentals/javascript-fundamentals/challenges/PhaseTwo/shoppingBasket.js:13:29)
> myBasket.addItem('Mars');
Uncaught TypeError: item.getPrice is not a function
    at ShoppingBasket.addItem (/Users/shilpachhabra/LearnNewLang_JS/JavaScriptFundamentals/javascript-fundamentals/challenges/PhaseTwo/shoppingBasket.js:13:29)
> "Mars"
'Mars'
> 'Mars'
'Mars'
> myBasket.getTotalPrice
[Function: getTotalPrice]
> 
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✕ gets candy name (1 ms)
    ✕ gets candy price
    ✕ shows Total Items in the basket
    ✕ shows Total Price of the basket
    ✕ adds a candy to the basket
    ✕ shows Total Items in the basket (1 ms)
    ✕ returns 0 as the total price when no candies have been added to the basket
    ✕ returns the sum of prices for each item in the basket

  ● ShoppingBasket › gets candy name

    ReferenceError: candy is not defined

      12 |
      13 |   it('gets candy name', () => {
    > 14 |     candy.getName();
         |     ^
      15 |     expect(candy.getName()).toBe("Mars");
      16 |   });
      17 |

      at Object.candy (shoppingBasket.test.js:14:5)

  ● ShoppingBasket › gets candy price

    ReferenceError: candy is not defined

      17 |
      18 |   it('gets candy price', () => {
    > 19 |     candy.getName();
         |     ^
      20 |     expect(candy.getPrice()).toBe(4.99);
      21 |   });
      22 |

      at Object.candy (shoppingBasket.test.js:19:5)

  ● ShoppingBasket › shows Total Items in the basket

    ReferenceError: myBasket is not defined

      22 |
      23 |   it('shows Total Items in the basket', () => {
    > 24 |     myBasket.showItem();
         |     ^
      25 |     expect(myBasket.showItem()).toEqual([]);
      26 |   });
      27 |

      at Object.myBasket (shoppingBasket.test.js:24:5)

  ● ShoppingBasket › shows Total Price of the basket

    ReferenceError: myBasket is not defined

      27 |
      28 |   it('shows Total Price of the basket', () => {
    > 29 |     myBasket.getTotalPrice();
         |     ^
      30 |     expect(myBasket.getTotalPrice()).toBe(0);
      31 |   });
      32 |

      at Object.myBasket (shoppingBasket.test.js:29:5)

  ● ShoppingBasket › adds a candy to the basket

    ReferenceError: myBasket is not defined

      32 |
      33 |   it('adds a candy to the basket', () => {
    > 34 |     myBasket.addItem(mockCandy1);
         |     ^
      35 |     expect(myBasket.getTotalPrice()).toEqual(1.00);
      36 |   });
      37 |

      at Object.myBasket (shoppingBasket.test.js:34:5)

  ● ShoppingBasket › shows Total Items in the basket

    ReferenceError: myBasket is not defined

      37 |
      38 |   it('shows Total Items in the basket', () => {
    > 39 |     myBasket.showItem();
         |     ^
      40 |     expect(myBasket.showItem()).toEqual([1]);
      41 |   });
      42 |

      at Object.myBasket (shoppingBasket.test.js:39:5)

  ● ShoppingBasket › returns 0 as the total price when no candies have been added to the basket

    ReferenceError: myBasket is not defined

      42 |
      43 |   it('returns 0 as the total price when no candies have been added to the basket', () => {
    > 44 |     expect(myBasket.totalPrice).toEqual(0);
         |            ^
      45 |   });
      46 |
      47 | //   it('shows Total Price of the basket after first mock candy is added', () => {

      at Object.myBasket (shoppingBasket.test.js:44:12)

  ● ShoppingBasket › returns the sum of prices for each item in the basket

    ReferenceError: myBasket is not defined

      51 |
      52 |   it('returns the sum of prices for each item in the basket', () => {
    > 53 |     myBasket.addItem(mockCandy1);
         |     ^
      54 |     myBasket.addItem(mockCandy2);
      55 |     myBasket.addItem(new Candy('Skittle', 3.99));
      56 |     expect(myBasket.getTotalPrice()).toBeCloseTo(6.89); // to accept float number => 1.00 + 1.90 + 3.99

      at Object.myBasket (shoppingBasket.test.js:53:5)

Test Suites: 1 failed, 1 total
Tests:       8 failed, 8 total
Snapshots:   0 total
Time:        0.214 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ● Test suite failed to run

    ReferenceError: nil is not defined

      2 | const ShoppingBasket = require('./shoppingBasket');
      3 |
    > 4 | let myBasket = nil;
        |                ^
      5 | const candy1 = new Candy('Toblerone', 1.00);
      6 | const candy2 = new Candy('Snickers', 1.90);
      7 |

      at Object.nil (shoppingBasket.test.js:4:16)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.185 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✕ gets candy name
    ✕ gets candy price
    ✕ shows Total Items in the basket
    ✕ shows Total Price of the basket
    ✕ adds a candy to the basket
    ✕ shows Total Items in the basket (1 ms)
    ✕ returns 0 as the total price when no candies have been added to the basket
    ✕ returns the sum of prices for each item in the basket (1 ms)

  ● ShoppingBasket › gets candy name

    ReferenceError: candy is not defined

      13 |
      14 |   it('gets candy name', () => {
    > 15 |     candy.getName();
         |     ^
      16 |     expect(candy.getName()).toBe("Mars");
      17 |   });
      18 |

      at Object.candy (shoppingBasket.test.js:15:5)

  ● ShoppingBasket › gets candy price

    ReferenceError: candy is not defined

      18 |
      19 |   it('gets candy price', () => {
    > 20 |     candy.getName();
         |     ^
      21 |     expect(candy.getPrice()).toBe(4.99);
      22 |   });
      23 |

      at Object.candy (shoppingBasket.test.js:20:5)

  ● ShoppingBasket › shows Total Items in the basket

    TypeError: Cannot read properties of null (reading 'showItem')

      23 |
      24 |   it('shows Total Items in the basket', () => {
    > 25 |     myBasket.showItem();
         |              ^
      26 |     expect(myBasket.showItem()).toEqual([]);
      27 |   });
      28 |

      at Object.showItem (shoppingBasket.test.js:25:14)

  ● ShoppingBasket › shows Total Price of the basket

    TypeError: Cannot read properties of null (reading 'getTotalPrice')

      28 |
      29 |   it('shows Total Price of the basket', () => {
    > 30 |     myBasket.getTotalPrice();
         |              ^
      31 |     expect(myBasket.getTotalPrice()).toBe(0);
      32 |   });
      33 |

      at Object.getTotalPrice (shoppingBasket.test.js:30:14)

  ● ShoppingBasket › adds a candy to the basket

    TypeError: Cannot read properties of null (reading 'addItem')

      33 |
      34 |   it('adds a candy to the basket', () => {
    > 35 |     myBasket.addItem(mockCandy1);
         |              ^
      36 |     expect(myBasket.getTotalPrice()).toEqual(1.00);
      37 |   });
      38 |

      at Object.addItem (shoppingBasket.test.js:35:14)

  ● ShoppingBasket › shows Total Items in the basket

    TypeError: Cannot read properties of null (reading 'showItem')

      38 |
      39 |   it('shows Total Items in the basket', () => {
    > 40 |     myBasket.showItem();
         |              ^
      41 |     expect(myBasket.showItem()).toEqual([1]);
      42 |   });
      43 |

      at Object.showItem (shoppingBasket.test.js:40:14)

  ● ShoppingBasket › returns 0 as the total price when no candies have been added to the basket

    TypeError: Cannot read properties of null (reading 'totalPrice')

      43 |
      44 |   it('returns 0 as the total price when no candies have been added to the basket', () => {
    > 45 |     expect(myBasket.totalPrice).toEqual(0);
         |                     ^
      46 |   });
      47 |
      48 | //   it('shows Total Price of the basket after first mock candy is added', () => {

      at Object.totalPrice (shoppingBasket.test.js:45:21)

  ● ShoppingBasket › returns the sum of prices for each item in the basket

    TypeError: Cannot read properties of null (reading 'addItem')

      52 |
      53 |   it('returns the sum of prices for each item in the basket', () => {
    > 54 |     myBasket.addItem(mockCandy1);
         |              ^
      55 |     myBasket.addItem(mockCandy2);
      56 |     myBasket.addItem(new Candy('Skittle', 3.99));
      57 |     expect(myBasket.getTotalPrice()).toBeCloseTo(6.89); // to accept float number => 1.00 + 1.90 + 3.99

      at Object.addItem (shoppingBasket.test.js:54:14)

Test Suites: 1 failed, 1 total
Tests:       8 failed, 8 total
Snapshots:   0 total
Time:        0.222 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✕ gets candy name (1 ms)
    ✕ gets candy price
    ✓ shows Total Items in the basket (1 ms)
    ✓ shows Total Price of the basket
    ✕ adds a candy to the basket
    ✕ shows Total Items in the basket (1 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✕ returns the sum of prices for each item in the basket

  ● ShoppingBasket › gets candy name

    ReferenceError: candy is not defined

      13 |
      14 |   it('gets candy name', () => {
    > 15 |     candy.getName();
         |     ^
      16 |     expect(candy.getName()).toBe("Mars");
      17 |   });
      18 |

      at Object.candy (shoppingBasket.test.js:15:5)

  ● ShoppingBasket › gets candy price

    ReferenceError: candy is not defined

      18 |
      19 |   it('gets candy price', () => {
    > 20 |     candy.getName();
         |     ^
      21 |     expect(candy.getPrice()).toBe(4.99);
      22 |   });
      23 |

      at Object.candy (shoppingBasket.test.js:20:5)

  ● ShoppingBasket › adds a candy to the basket

    ReferenceError: mockCandy1 is not defined

      33 |
      34 |   it('adds a candy to the basket', () => {
    > 35 |     myBasket.addItem(mockCandy1);
         |                      ^
      36 |     expect(myBasket.getTotalPrice()).toEqual(1.00);
      37 |   });
      38 |

      at Object.mockCandy1 (shoppingBasket.test.js:35:22)

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      39 |   it('shows Total Items in the basket', () => {
      40 |     myBasket.showItem();
    > 41 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      42 |   });
      43 |
      44 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:41:33)

  ● ShoppingBasket › returns the sum of prices for each item in the basket

    ReferenceError: mockCandy1 is not defined

      52 |
      53 |   it('returns the sum of prices for each item in the basket', () => {
    > 54 |     myBasket.addItem(mockCandy1);
         |                      ^
      55 |     myBasket.addItem(mockCandy2);
      56 |     myBasket.addItem(new Candy('Skittle', 3.99));
      57 |     expect(myBasket.getTotalPrice()).toBeCloseTo(6.89); // to accept float number => 1.00 + 1.90 + 3.99

      at Object.mockCandy1 (shoppingBasket.test.js:54:22)

Test Suites: 1 failed, 1 total
Tests:       5 failed, 3 passed, 8 total
Snapshots:   0 total
Time:        0.199 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✕ gets candy name (2 ms)
    ✕ gets candy price
    ✓ shows Total Items in the basket
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket (1 ms)
    ✕ shows Total Items in the basket (1 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › gets candy name

    expect(received).toBe(expected) // Object.is equality

    Expected: "Mars"
    Received: "Toblerone"

      13 |   it('gets candy name', () => {
      14 |     candy1.getName();
    > 15 |     expect(candy1.getName()).toBe("Mars");
         |                              ^
      16 |   });
      17 |
      18 |   it('gets candy price', () => {

      at Object.toBe (shoppingBasket.test.js:15:30)

  ● ShoppingBasket › gets candy price

    ReferenceError: candy is not defined

      17 |
      18 |   it('gets candy price', () => {
    > 19 |     candy.getName();
         |     ^
      20 |     expect(candy.getPrice()).toBe(4.99);
      21 |   });
      22 |

      at Object.candy (shoppingBasket.test.js:19:5)

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      38 |   it('shows Total Items in the basket', () => {
      39 |     myBasket.showItem();
    > 40 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      41 |   });
      42 |
      43 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:40:33)

Test Suites: 1 failed, 1 total
Tests:       3 failed, 5 passed, 8 total
Snapshots:   0 total
Time:        0.21 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✕ gets candy price
    ✓ shows Total Items in the basket (1 ms)
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket
    ✕ shows Total Items in the basket (2 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › gets candy price

    ReferenceError: candy is not defined

      17 |
      18 |   it('gets candy price', () => {
    > 19 |     candy.getName();
         |     ^
      20 |     expect(candy.getPrice()).toBe(4.99);
      21 |   });
      22 |

      at Object.candy (shoppingBasket.test.js:19:5)

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      38 |   it('shows Total Items in the basket', () => {
      39 |     myBasket.showItem();
    > 40 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      41 |   });
      42 |
      43 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:40:33)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 6 passed, 8 total
Snapshots:   0 total
Time:        0.203 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✕ gets candy price (1 ms)
    ✓ shows Total Items in the basket
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket
    ✕ shows Total Items in the basket (2 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › gets candy price

    expect(received).toBe(expected) // Object.is equality

    Expected: 4.99
    Received: 1

      18 |   it('gets candy price', () => {
      19 |     candy1.getName();
    > 20 |     expect(candy1.getPrice()).toBe(4.99);
         |                               ^
      21 |   });
      22 |
      23 |   it('shows Total Items in the basket', () => {

      at Object.toBe (shoppingBasket.test.js:20:31)

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      38 |   it('shows Total Items in the basket', () => {
      39 |     myBasket.showItem();
    > 40 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      41 |   });
      42 |
      43 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:40:33)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 6 passed, 8 total
Snapshots:   0 total
Time:        0.238 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket
    ✕ shows Total Items in the basket (2 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      38 |   it('shows Total Items in the basket', () => {
      39 |     myBasket.showItem();
    > 40 |     expect(myBasket.showItem()).toEqual([1]);
         |                                 ^
      41 |   });
      42 |
      43 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:40:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.204 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ node
Welcome to Node.js v20.3.1.
Type ".help" for more information.
> const ShoppingBasket = require('./shoppingBasket');
undefined
> const myBasket = new ShoppingBasket();
undefined
> myBasket.showItems();
[]
> const Candy = require('./candy');
undefined
> const Candy = require('./candy');
Uncaught SyntaxError: Identifier 'Candy' has already been declared
> const candy1 = new Candy('Toblerone', 1.00);
undefined
> myBasket.showItems();
[]
> myBasket.addItem();
Uncaught TypeError: Cannot read properties of undefined (reading 'getPrice')
    at ShoppingBasket.addItem (/Users/shilpachhabra/LearnNewLang_JS/JavaScriptFundamentals/javascript-fundamentals/challenges/PhaseTwo/shoppingBasket.js:11:29)
> candy1;
Candy { name: 'Toblerone', price: 1 }
> candy1.getName();
'Toblerone'
> candy1.getPrice();
1
> myBasket.showItems();
[ undefined ]
> candy1.getPrice();
1
> myBasket.addItem(candy1);
undefined
> myBasket.showItems();
[ undefined, Candy { name: 'Toblerone', price: 1 } ]
> 
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✕ shows Total Items in the basket
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket (1 ms)
    ✕ shows Total Items in the basket
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › shows Total Items in the basket

    TypeError: myBasket.showItem is not a function

      22 |
      23 |   it('shows Total Items in the basket', () => {
    > 24 |     myBasket.showItem();
         |              ^
      25 |     expect(myBasket.showItem()).toEqual([]);
      26 |   });
      27 |

      at Object.showItem (shoppingBasket.test.js:24:14)

  ● ShoppingBasket › shows Total Items in the basket

    TypeError: myBasket.showItem is not a function

      37 |
      38 |   it('shows Total Items in the basket', () => {
    > 39 |     myBasket.showItem();
         |              ^
      40 |     expect(myBasket.showItem()).toEqual([1]);
      41 |   });
      42 |

      at Object.showItem (shoppingBasket.test.js:39:14)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 6 passed, 8 total
Snapshots:   0 total
Time:        0.189 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket
    ✕ shows Total Items in the basket (1 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket (1 ms)
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › shows Total Items in the basket

    TypeError: myBasket.showItem is not a function

      37 |
      38 |   it('shows Total Items in the basket', () => {
    > 39 |     myBasket.showItem();
         |              ^
      40 |     expect(myBasket.showItems()).toEqual([1]);
      41 |   });
      42 |

      at Object.showItem (shoppingBasket.test.js:39:14)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.196 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 FAIL  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket (1 ms)
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket
    ✕ shows Total Items in the basket (2 ms)
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket

  ● ShoppingBasket › shows Total Items in the basket

    expect(received).toEqual(expected) // deep equality

    - Expected  - 3
    + Received  + 1

    - Array [
    -   1,
    - ]
    + Array []

      38 |   it('shows Total Items in the basket', () => {
      39 |     myBasket.showItems();
    > 40 |     expect(myBasket.showItems()).toEqual([1]);
         |                                  ^
      41 |   });
      42 |
      43 |   it('returns 0 as the total price when no candies have been added to the basket', () => {

      at Object.toEqual (shoppingBasket.test.js:40:34)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 7 passed, 8 total
Snapshots:   0 total
Time:        0.236 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ jest shoppingBasket.test.js
 PASS  ./shoppingBasket.test.js
  ShoppingBasket
    ✓ gets candy name (1 ms)
    ✓ gets candy price
    ✓ shows Total Items in the basket (1 ms)
    ✓ shows Total Price of the basket
    ✓ adds a candy to the basket
    ✓ shows Total Items in the basket
    ✓ returns 0 as the total price when no candies have been added to the basket
    ✓ returns the sum of prices for each item in the basket

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        0.185 s, estimated 1 s
Ran all test suites matching /shoppingBasket.test.js/i.
➜  PhaseTwo git:(main) ✗ 