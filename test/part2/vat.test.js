const { Cart } = require("../../src/part2/Cart");
const { calculateVat } = require("../../src/part2/vat");

describe("VAT", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
    const item = "strawberry";
    cart.add(item, 1);
  });

  it.each([
    [100, 120, 20],
    [0.13, 0.16, 0.03],
  ])("should return total with vat", (subtotal, total, vat) => {
    const vatRate = 0.2;
    const result = calculateVat(subtotal, vatRate);
    expect(result).toEqual({ total, vat });
  });
});
