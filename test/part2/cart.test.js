const { Cart } = require("../../src/part2/Cart");

describe.skip("cart", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it("should add an item", () => {
    const item = "strawberry";
    cart.add(item, 1);
    expect(cart.content[item]).toEqual({ qty: 1, price: 1 });
  });

  it("should remove an item", () => {
    const item = "strawberry";
    cart.add(item, 1);
    cart.remove(item);
    expect(cart.content[item]).toBeUndefined();
  });

  it("should update the quantity of an item", () => {
    const item = "strawberry";
    cart.add(item, 1);
    cart.updateQty(item, 3);
    expect(cart.content[item]).toEqual({ qty: 3, price: 1 });
  });
});
