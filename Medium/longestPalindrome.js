/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return "";

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandFromCenter(s, i, i);
    let evenPalindrome = expandFromCenter(s, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
};

const expandFromCenter = (s, l, r) => {
  let i = 0;
  while (s[l - i] && s[l - i] === s[r + i]) {
    i++;
  }
  i--;

  return s.slice(l - i, r + i + 1);
};
