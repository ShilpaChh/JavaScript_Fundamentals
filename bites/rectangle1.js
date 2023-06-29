// Ch - 12:
// file: rectangle.js => without module.exports and require

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

    // Usage:
    let rect = new Rectangle(4, 10);
    console.log(rect.getArea());

// ➜  bites git:(main) ✗ node rectangle1.js
// 40

