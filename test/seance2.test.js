const {
  addition,
  substraction,
  multiplication,
} = require("../src/part1/seance2/05-describe");
const { square } = require("../src/part1/seance2/06-each");

describe.skip("Séance 2", () => {
  describe("Calculatrice", () => {
    it("should add two numbers", () => {
      const [a, b] = [1, 2];
      const result = addition(a, b);
      expect(result).toBe(3);
    });
    it("should substract two numbers", () => {
      const [a, b] = [1, 2];
      const result = substraction(a, b);
      expect(result).toBe(-1);
    });
    it("should multiply two numbers", () => {
      const [a, b] = [1, 2];
      const result = multiplication(a, b);
      expect(result).toBe(2);
    });
  });

  it.each([
    [2, 4],
    [3, 9],
  ])("should calculate the squared value of a number", (num, expected) => {
    const result = square(num);
    expect(result).toBe(expected);
  });
});
