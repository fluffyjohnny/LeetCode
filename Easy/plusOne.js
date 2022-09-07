/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  return String(BigInt(digits.join("")) + BigInt(1)).split("");
};
