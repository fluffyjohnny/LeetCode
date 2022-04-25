/**
 * leetcode #9
 * @param {number} x
 * @returns boolean
 */

const isPalindrome = function(x) {
  const xString = x.toString();
  let num = xString;
  
  if (num.split('').reverse().join('') === xString) {
    return true;
  }
  return false;
};


console.log(isPalindrome(121));