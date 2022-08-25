/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {

  const length = points.length;
  let distance = new Array(length);
  let result = [];

  for (let i = 0; i < length; i++) {
    let x = points[i][0],
      y = points[i][1];
    distance[i] = x * x + y * y;
  }

  distance.sort((a, b) => {
    return a - b;
  });

  let distk = distance[k - 1];

  for (let i = 0; i < length; i++) {
    let x = points[i][0],
      y = points[i][1];
    let dist = x * x + y * y;

    if (dist <= distk) result.push([x, y]);
  }

  return result;
};

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);
