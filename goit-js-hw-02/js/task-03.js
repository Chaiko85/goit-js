const findLongestWord = function(string) {
  const someText = string.split(" ");

  let theLongestWord = "";

  for (let i = 0; i < someText.length; i += 1) {
    if (someText[i].length > theLongestWord.length) {
      theLongestWord = someText[i];
    }
  }

  return theLongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
