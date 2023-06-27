const uppercaseMessage = (message) => {
    return message.toUpperCase();
  }
  
  // This function accepts as arguments a string message, and a function.
  // It then calls the given function to do its job.
//   const transform = (message, transformFunction) => {
//     return transformFunction(message);
//   }

//   transform("hello", uppercaseMessage);


//   ➜  bites git:(main) ✗ node                    
// Welcome to Node.js v20.3.1.
// Type ".help" for more information.
// > const uppercaseMessage = (message) => {
// ...     return message.toUpperCase();
// ...   }
// undefined
// >   const transform = (message, transformFunction) => {
// ...     return transformFunction(message);
// ...   }
// undefined
// >  transform("hello", uppercaseMessage);
// 'HELLO'
  
  console.log(uppercaseMessage("hello"));

//  o/p:
//  ➜  bites git:(main) ✗ node uppercaseMessage.js
// HELLO