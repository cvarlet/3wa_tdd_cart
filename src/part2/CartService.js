class CartService {
  constructor(productRepo, cart) {
    this.productRepo = productRepo;
    this.cart = cart;
  }

  async addProductToCart(productName) {
    const product = await this.productRepo.isProductInStock(productName);
    if (!product) {
      throw new Error("This item is out of stock.");
    }
    const cartContent = await this.cart.add(product.name, product.price);
    return cartContent;
  }
}

module.exports = { CartService };
