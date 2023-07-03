class ShoppingBasket {
  constructor() {
    this.totalPrice = 0;
    this.items = [];
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