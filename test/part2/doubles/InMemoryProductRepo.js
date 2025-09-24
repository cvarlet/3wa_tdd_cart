const STOCK = {
  strawberry: 1,
  lemon: 0,
};

class InMemoryProductRepo {
  constructor(stock = {}) {
    this.stock = stock;
  }

  isProductInStock(item) {
    if (!(item in this.stock)) {
      throw new Error("This item does not exist.");
    }

    const stock = this.stock[item];
    return stock > 0;
  }
}

module.exports = { InMemoryProductRepo, STOCK };
