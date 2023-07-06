class ShoppingBasket {
  constructor() {
    this.totalPrice = 0;
    this.items = [];
    this.discount = 0;
  }
  applyDiscount(discount) {
    discount = this.discount;
  }
  getTotalPrice() {
    return this.totalPrice;
  }
  addItem(item) {
    this.items.push(item);
    this.totalPrice += item.getPrice();
  }
  showItems() {
    return this.items;
  }
}
module.exports = ShoppingBasket;