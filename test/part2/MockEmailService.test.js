const { MockEmailService } = require("./doubles/MockEmailService");

describe.skip("MockEmailService", () => {
  let mockEmailService;
  const order = {
    email: "test@example.com",
    cartContent: {
      strawberry: { qty: 1, price: 1, totalPrice: 1 },
    },
  };

  beforeEach(() => {
    mockEmailService = new MockEmailService();
  });

  it("Correct scenario : Should send a confirmation email", () => {
    mockEmailService.sendCheckoutConfirmationEmail(order);
    expect(mockEmailService.getSentEmails().length).toBe(1);
  });
});
