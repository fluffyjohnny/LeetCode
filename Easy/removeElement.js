/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; ) {
    nums[i] === val ? nums.splice(i, 1) : i++;
  }
};