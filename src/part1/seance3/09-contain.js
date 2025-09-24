function containsWord(sentence, word) {
  const containsWord = sentence.split(" ").includes(word);
  return containsWord;
}

module.exports = { containsWord };
