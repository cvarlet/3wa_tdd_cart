const { applyDiscount } = require("../../src/part2/discount");

describe.skip("Discount", () => {
  it("Given a 20% discount, When the total before discount is 100€, Then the total after discount is 80€", () => {
    const [priceBeforeDiscount, discountRate] = [100, 0.2];
    const discountAmount = applyDiscount(priceBeforeDiscount, discountRate);
    expect(discountAmount).toEqual({
      priceAfterDiscount: 80,
      discountAmount: 20,
    });
  });
});
