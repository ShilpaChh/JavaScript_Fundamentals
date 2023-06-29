// Ch - 12:
// file: rectangle.js

class Rectangle {

    // A constructor, to give initial arguments.
    constructor(height, width) {
  
      // We can define attributes stored on the instance with `this`
      this.height = height;
      this.width = width;
    }
  
    // A method.
    getArea() {
      return this.height * this.width;
    }
  }
  
  // Export the class
  module.exports = Rectangle;

//   ➜  bites git:(main) ✗ node
// Welcome to Node.js v20.3.1.
// Type ".help" for more information.
// > // In the REPL
// undefined
// > 
// > const Rectangle = require('./rectangle');
// undefined
// > const rect = new Rectangle(4, 10);
// undefined
// > 
// > rect.getArea(); // 40
// 40
// > 