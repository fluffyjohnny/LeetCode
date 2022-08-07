/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  // const map = new Map();

  // for (const letter of s) {
  //   if (map.has(letter)) {
  //     map.set(letter, map.get(letter) + 1);
  //   } else {
  //     map.set(letter, 1);
  //   }
  // }

  // return map;

  let longest = 0;
  let keys = {};

  for (const char of s) {
    keys[char] = (keys[char] || 0) + 1;

    if (keys[char] % 2 === 0) longest += 2;
  }
  return s.length > longest ? longest + 1 : longest;
};

console.log(longestPalindrome("abbbc"));
