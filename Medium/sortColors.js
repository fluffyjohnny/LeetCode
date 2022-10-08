/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let zero = [],
    one = [],
    two = [];
  for (let num of nums) {
    if (num === 0) {
      zero.push(0);
    } else if (num === 1) {
      one.push(1);
    } else {
      two.push(2);
    }
  }
  nums.length = 0;
  nums.push(...zero);
  nums.push(...one);
  nums.push(...two);
};
