const PRICES = {
  strawberry: 1,
};

class Cart {
  constructor(content = []) {
    this.content = content;
  }
  add(item, price) {
    if (!this.content[item]) {
      this.content[item] = { qty: 1, price };
    } else {
      this.content[item].qty += 1;
    }
  }

  remove(item) {
    delete this.content[item];
  }

  updateQty(item, qty) {
    this.content[item].qty = qty;
  }
}

module.exports = { Cart, PRICES };
