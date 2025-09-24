function calculateVat(subtotal, vatRate = 0.2) {
  const vat = Math.round(subtotal * vatRate * 100) * 0.01;
  const total = subtotal + vat;
  return { total, vat };
}

module.exports = { calculateVat };
