/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  let result = [];

  const index_map = new Map();


  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (index_map.has(difference)) {
      result[1] = i;
      result[0] = index_map.get(difference);
      break;
    } else {
      index_map.set(nums[i], i);
    }
  }
  return result;
};

console.log(twoSum([2,7,11,15], 18));