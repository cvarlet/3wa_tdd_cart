function division(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro");
  }
  return a / b;
}

module.exports = { division };
