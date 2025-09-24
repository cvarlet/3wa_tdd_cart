const { Cart } = require("../../src/part2/Cart");
const { CartService } = require("../../src/part2/CartService");
const {
  InMemoryProductRepo,
  PRODUCTS,
} = require("./doubles/InMemoryProductRepo");

describe("Cart Service", () => {
  let cart, inMemoryProductRepo, cartService;

  beforeEach(() => {
    cart = new Cart();
    inMemoryProductRepo = new InMemoryProductRepo(PRODUCTS);
    cartService = new CartService(inMemoryProductRepo, cart);
  });

  describe("Checking stock before adding an item to a Cart", () => {
    describe.skip("Repository", () => {
      it("Correct scenario : should say an item is in stock", () => {
        const product = "strawberry";
        const result = inMemoryProductRepo.isProductInStock(product);
        expect(result).toEqual({
          id: 1,
          name: "strawberry",
          price: 1,
          stock: 1,
        });
      });

      it("Correct scenario : should say an item is out of stock", () => {
        const product = "lemon";
        const result = inMemoryProductRepo.isProductInStock(product);
        expect(result).toBe(false);
      });

      it("Incorrect scenario : the item does not exist", () => {
        const product = "shrubbery";
        expect(() => inMemoryProductRepo.isProductInStock(product)).toThrow(
          "This item does not exist."
        );
      });
    });

    describe.skip("CartService", () => {
      describe("Adding a product to a cart", () => {
        it("Correct scenario: should add a product to a cart", async () => {
          const product = "strawberry";
          const result = await cartService.addProductToCart(product);
          expect(result[product].qty).toBe(1);
        });
        // it("Incorrect scenario: the item is out of stock", () => {
        //   const product = "lemon";
        //   const result = cartService.addProductToCart(product);
        //   expect(result).toThrow("This item is out of stock.");
        // });
        // it("Incorrect scenario : the item does not exist", () => {
        //   const product = "shrubbery";
        //   expect(() => cartService.addProductToCart(product)).toThrow(
        //     "This item does not exist."
        //   );
        // });
      });
    });
  });
});
