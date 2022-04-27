/**
 * leetcode #14
 * @param {array[strings]} x
 * @returns string
 */

const longestCommonPrefix = (strs) => {
  let longestCommonPrefix = '';
  if (strs === null || strs.length === 0) return longestCommonPrefix;

  // to find the shortest string in the array
  let minimumLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minimumLength = Math.min(minimumLength, strs[i].length);
  }

  // loop through each letter
  for (let i = 0; i < minimumLength; i++) {
    let current = strs[0][i];

    // if the letter matches current, then add the letter, if not, return.
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }
  return longestCommonPrefix;
};


console.log(longestCommonPrefix(['he', 'heeel', 'heool']));


