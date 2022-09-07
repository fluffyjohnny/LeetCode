/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
