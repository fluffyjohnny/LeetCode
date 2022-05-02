/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  let result = [];

  const indexMap = new Map();


  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (indexMap.has(difference)) {
      result[1] = i;
      result[0] = indexMap.get(difference);
      break;
    } else {
      indexMap.set(nums[i], i);
    }
  }
  return result;
};

console.log(twoSum([2,7,11,15], 18));