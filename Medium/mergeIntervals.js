/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  let sorted = intervals.sort((a, b) => a[0] - b[0]);

  let next = []; // result array
  let j = 0; // pointer for next

  let first = intervals.shift();
  next.push(first); // to compare next with intervals

  for (let i = 0; i < intervals.length; i++) {
    if (next[j][1] >= intervals[i][0]) {
      next[j] = [next[j][0], Math.max(intervals[i][1], next[j][1])];
    } else {
      next.push([intervals[i][0], intervals[i][1]]);
      j++;
    }
  }

  return next;
};
