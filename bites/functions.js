// Ch - 4:
// 1. This function accepts no arguments
const Message = () => {
    console.log('Hi there!');
  }
  
  // 2. This function accepts one
  const Message1 = (message) => {
    console.log(message);
  }

  Message('Hi there!');

// 3.
const myFunction = () => {
    console.log('Hello')
  }
  myFunction() // Returns Hello as we have called the function here
  
  const hello = (name1) => {
    return 'Calling Hello via function hello, ' + name1
  }
  console.log(hello('Shilpa'));
  // o/p: Calling Hello via function hello, Shilpa

 // 4. 
  const returnFour = () => {
    return 4;
  };
    console.log(returnFour());

  const something = returnFour;
  console.log(something());

// o/p:
// 4
// 4

// Exercise: Define (in a file sayHello.js) the function sayHello, which returns the string 'Hello'.
// 5.
const sayHello = () => {
    return 'Hello';
}
console.log(sayHello());

// 6.
// Modify the previous function sayHello so it accepts one argument, and calling sayHello('Sarah') displays a personalised message:
const personalisedHello = (name) => {
    return 'Hello ' + name + '!';
}
console.log(personalisedHello('Shilpa'));
// o/p: Hello Shilpa!

// 7.
// Interpolation - uses back tick and curly brackets and without concatenation (+)
const anotherHello = (name) => {
    return `Hello again ${name}!`;
}
console.log(anotherHello('Shilpa'));
// o/p: Hello again Shilpa!

// 8.

