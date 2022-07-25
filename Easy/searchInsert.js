/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] > target) {
      return i;
    }
    if (target > nums[nums.length - 1]) {
      return nums.length;
    }
  }
};
