const { Cart } = require("../../src/part2/Cart");
const { InMemoryProductRepo, STOCK } = require("./doubles/InMemoryProductRepo");

describe("Cart Service", () => {
  let cart, inMemoryProductRepo;

  beforeEach(() => {
    cart = new Cart();
    inMemoryProductRepo = new InMemoryProductRepo(STOCK);
  });

  describe("Checking stock before adding an item to a Cart", () => {
    it("Correct scenario : should say an item is in stock", () => {
      const product = "strawberry";
      const result = inMemoryProductRepo.isProductInStock(product);
      expect(result).toBe(true);
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
});
