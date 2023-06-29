class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

class ShoppingBasket {
    constructor() {
        this.items = [];
    }

    getTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].getPrice();
        }
        return total;
    }

    addItem(item) {
        this.items.push(item);
    }
}

const candy = new Candy('Mars', 4.99);
console.log(candy.getName()); // 'Mars'
console.log(candy.getPrice()); // 4.99

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice()); // 0

basket.addItem(candy);
console.log(basket.getTotalPrice()); // 4.99

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.getTotalPrice()); // 12.97

// ➜  bites git:(main) ✗ node candy.js 
// Mars
// 4.99
// 0
// 4.99
// 12.97