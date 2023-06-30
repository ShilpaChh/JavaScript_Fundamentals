// Phase 2 - Ch 2:
// You'll test-drive a function searchCandies that takes the following two arguments: a search 
// string and a maximum price — and returns only the names of candies matching these criteria:
// a) the candy name starts by the search string
// b) the candy price is less than the maximum price

const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 },
  ];
  
//   Chaining of Array Methods in JavaScript - Reference:
// https://www.geeksforgeeks.org/chaining-of-array-methods-in-javascript/

  const searchCandies = (search, maxPrice) => {
    return candies
      .filter(
        (candy) =>
          candy.name.toLowerCase().startsWith(search.toLowerCase()) &&
          candy.price < maxPrice
      )
      .map((candy) => candy.name);
  };
  
  module.exports = searchCandies;