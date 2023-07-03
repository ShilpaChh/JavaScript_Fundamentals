const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket');

let myBasket = null;
const candy1 = new Candy('Toblerone', 1.00);
const candy2 = new Candy('Snickers', 1.90);

describe('ShoppingBasket', () => {
  beforeEach(() => {
    myBasket = new ShoppingBasket();
  });

  it('gets candy name', () => {
    candy1.getName();
    expect(candy1.getName()).toBe("Toblerone");
  });

  it('gets candy price', () => {
    candy1.getName();
    expect(candy1.getPrice()).toBe(1.00);
  });

  it('shows Total Items in the basket', () => {
    myBasket.addItem(candy1);
    expect(myBasket.showItems()).toEqual([candy1]);
  });

  it('shows Total Price of the basket', () => {
    myBasket.getTotalPrice();
    expect(myBasket.getTotalPrice()).toBe(0);
  });

  it('adds a candy to the basket', () => {
    myBasket.addItem(candy1);
    expect(myBasket.showItems()).toEqual([candy1]);
  });

  it('by default the shopping basket is empty', () => {
    expect(myBasket.showItems()).toEqual([]);
  });

  it('returns 0 as the total price when no candies have been added to the basket', () => {
    expect(myBasket.totalPrice).toEqual(0);
  });

//   it('shows Total Price of the basket after first mock candy is added', () => {
//     myBasket.getTotalPrice();
//     expect(myBasket.getTotalPrice()).toBe(1.00);
//   });

  it('returns the sum of prices for each item in the basket', () => {
    myBasket.addItem(candy1);
    myBasket.addItem(candy2);
    myBasket.addItem(new Candy('Skittle', 3.99));
    expect(myBasket.getTotalPrice()).toBeCloseTo(6.89); // to accept float number => 1.00 + 1.90 + 3.99
  });

});