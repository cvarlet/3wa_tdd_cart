// const STOCK = {
//   strawberry: 1,
//   lemon: 0,
// };

const PRODUCTS = [
  { id: 1, name: "strawberry", price: 1, stock: 1 },
  { id: 2, name: "lemon", price: 1.5, stock: 0 },
];

class InMemoryProductRepo {
  constructor(products = []) {
    this.products = products;
  }

  isProductInStock(itemName) {
    const product = this.products.find((product) => product.name === itemName);

    if (!product) {
      throw new Error("This item does not exist.");
    }

    if (product.stock <= 0) {
      return false;
    }

    return product;
  }
}

module.exports = { InMemoryProductRepo, PRODUCTS };
