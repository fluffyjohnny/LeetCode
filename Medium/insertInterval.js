/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {

  const result = [];

  if (!intervals.length) {
    return [newInterval];
  }

  const index = intervals.findIndex(([a]) => newInterval[0] <= a);

  if (index === -1) {
    intervals.push(newInterval);
  } else {
    intervals.splice(index, 0, newInterval);
  }

  result.push(intervals[0]);

  let index2 = 1;
  while (index2 <= intervals.length - 1) {
    const [a, b] = result[result.length - 1];
    const [c, d] = intervals[index2];

    if (a <= c && c <= b) {
      result[result.length - 1] = [a, Math.max(b, d)];
    } else {
      result.push(intervals[index2]);
    }
    index2 += 1;
  }

  return result;
};
