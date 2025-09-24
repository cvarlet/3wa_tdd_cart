function isPalindrome(str) {
  const isPalindrome = str === str.split("").reverse().join("");
  return isPalindrome;
}

module.exports = { isPalindrome };
