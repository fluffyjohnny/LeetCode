/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let currentString = [];
  let longestStringLength = 0;

  for (let i = 0; i < s.length; i++) {
    const currentCharPosition = currentString.indexOf(s[i]);

    if (currentCharPosition !== -1) {
      currentString.splice(0, currentCharPosition + 1);
    }

    currentString.push(s[i]);

    longestStringLength = Math.max(longestStringLength, currentString.length);
  }

  return longestStringLength;
};
