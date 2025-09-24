/*exemple de Cart:
 content = [
  strawberry: {qty: 1, price: 1, totalPrice: 1}
]
*/
class Cart {
  constructor(content = []) {
    this.content = content;
  }

  add(item, price) {
    if (!this.content[item]) {
      this.content[item] = { qty: 1, price, totalPrice: price };
    } else {
      this.content[item].qty += 1;
      this.content[item].totalPrice += price;
    }
    return this.content;
  }

  remove(item) {
    delete this.content[item];
  }

  updateQty(item, qty) {
    this.content[item].qty = qty;
    this.content[item].totalPrice = qty * this.content[item].price;
  }
}

module.exports = { Cart };
