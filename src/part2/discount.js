function applyDiscount(price, discountRate) {
  const discountAmount = price * discountRate;
  const priceAfterDiscount = price - discountAmount;
  return { priceAfterDiscount, discountAmount };
}

module.exports = { applyDiscount };
