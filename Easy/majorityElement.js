/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = new Map();
  let tempMax = 0;
  let result = 3;

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  map.forEach((val, key) => {
    if (Number(val) > tempMax) {
      tempMax = val;
      result = key;
    }
  });

  return result;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
