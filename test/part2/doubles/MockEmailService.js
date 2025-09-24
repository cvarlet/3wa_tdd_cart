/*
Exemple de order = {
  email: "test@example.com", 
  cartContent: {
    strawberry: {qty: 1, price: 1, totalPrice: 1}
  }
}
*/

/*
Exemple de sentEmails : 
  [
    {
      to : test@example.com,
      subject : "Order confirmation",
      body : (order summary)
    }
  ]
*/

class MockEmailService {
  constructor() {
    this.sentEmails = [];
  }

  getSentEmails() {
    return this.sentEmails;
  }

  sendEmail(to, subject, body) {
    const email = {
      to,
      subject,
      body,
    };
    this.sentEmails.push(email);
  }

  sendCheckoutConfirmationEmail(order) {
    const { email, cartContent } = order;

    const itemsHtml = Object.entries(cartContent)
      .map(([name, { qty, price, totalPrice }]) => {
        return `<li>${qty} × ${name} @ ${price}€ = ${totalPrice}€</li>`;
      })
      .join("");

    const body = `
      <h2>Order summary</h2>
      <ul>
        ${itemsHtml}
      </ul>
    `;

    this.sendEmail(email, "Order confirmation", body);
  }
}

module.exports = { MockEmailService };
