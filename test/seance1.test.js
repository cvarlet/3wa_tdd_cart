const { addition } = require("../src/part1/seance1/01-add");
const { aireRectangle } = require("../src/part1/seance1/02-area");
const { isPalindrome } = require("../src/part1/seance1/03-palindrome");
const { countWords } = require("../src/part1/seance1/04-countWords");

describe.skip("seance 1", () => {
  it("should add two numbers", () => {
    const [a, b] = [1, 2];
    const result = addition(a, b);
    expect(result).toBe(3);
  });

  it.each([
    [2, 2, 4],
    [3, 3, 9],
  ])("should calculate the area of a rectangle", (length, width, expected) => {
    const result = aireRectangle(length, width);
    expect(result).toBe(expected);
  });

  it("should say string is a palindrome", () => {
    const str = "abba";
    const result = isPalindrome(str);
    expect(result).toBeTruthy();
  });

  it("should count words", () => {
    const str = "Hello World";
    const result = countWords(str);
    expect(result).toEqual(2);
  });
});
