// CH 7 Exercise

const lowercaseMessage = (message) => {
    return message.toLowerCase();
  }
  
  // This function accepts as arguments a string message, and a function.
  // It then calls the given function to do its job.
  const transform = (message, transformFunction) => {
    return transformFunction(message);
  }

console.log(transform("hello, My name is Shilpa Chhabra.", lowercaseMessage));

//  o/p:
// ➜  bites git:(main) ✗ node lowercaseMessage.js
// hello, my name is shilpa chhabra.