/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; ) {
    nums[i] === nums[i + 1] ? nums.splice(i, 1) : i++;
  }
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));
