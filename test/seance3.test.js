const { division } = require("../src/part1/seance3/07-division");
const { isEven } = require("../src/part1/seance3/08-pair");
const { containsWord } = require("../src/part1/seance3/09-contain");

describe.skip("Séance 4", () => {
  describe("should divide two numbers", () => {
    it("Correct scenario", () => {
      const [a, b] = [1, 2];
      const result = division(a, b);
      expect(result).toBe(0.5);
    });

    it("Incorrect scenario", () => {
      const [a, b] = [1, 0];
      expect(() => division(a, b)).toThrow("Division par zéro");
    });
  });

  it("should say the number is even", () => {
    const num = 2;
    const result = isEven(num);
    expect(result).toBeTruthy();
  });

  it("should say a sentence contains a specific word", () => {
    const [sentence, word] = ["Hello World", "World"];
    const result = containsWord(sentence, word);
    if (result) {
      expect(sentence).toContain(word);
    } else {
      expect(sentence).not.toContain(word);
    }
  });
});
