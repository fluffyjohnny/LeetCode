/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  return n.toString(2).replace(/0/g, "").length;
};
