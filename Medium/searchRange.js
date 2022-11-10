/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const idx = [];
  let empty = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      idx.push(i);
      empty = false;
    }
  }

  return empty ? [-1, -1] : [Math.min(...idx), Math.max(...idx)];
};
