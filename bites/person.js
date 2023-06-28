// Ch 10:
// In JavaScript, "object" usually refers to a type of key-value structure, similar to a Ruby hash. 
// Here's an example of a JavaScript object:
// There are two ways of declaring objects in JavaScript. The first one is:

const person = {
    name: 'Maxine',
    age: 32,
    address: 'London, E1 123'
  };
  
  // both ways can be used to access an object's property:
  console.log(person.name);
  console.log(person['name']);
  
//   ➜  bites git:(main) ✗ node person.js 
// Maxine
// Maxine

// REFER bankAccount.js for another way..

// CH 10 - Exercise:

const person1 = {
    name: 'Shilpa',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

  console.log(person1.name);
  console.log(person1.age);
  console.log(person.address);
  console.log(person1.address.city);
  console.log(person1.hobbies[1]);

//   ➜  bites git:(main) ✗ node person.js
// Maxine
// Maxine
// Shilpa
// 32
// London, E1 123
// London
// tennis
