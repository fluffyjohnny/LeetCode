/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  //first, use >>> to get binary with lead 0 (>>> is just in case, for negative numbers)
  let str = (n >>> 0).toString(2) || "";
  let list = [];
  str = "00000000000000000000000000000000".substr(str.length) + str;
  list = str.split("");
  //reverse the list
  list.reverse();
  str = list.join("");
  //transfer it to number
  return parseInt(str, 2);
};
