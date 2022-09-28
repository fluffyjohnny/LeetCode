/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  const getRotten = () => {
    let [start, fresh] = [[], 0];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 2) start.push([i, j]);
        else if (grid[i][j] === 1) fresh++;
      }
    }

    return [start, fresh];
  };

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let [start, fresh] = getRotten();
  let queue = [...start]; // there can be mutiple rotten
  let output = 0;

  while (fresh && queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift();

      for (const [dx, dy] of directions) {
        const x = row + dx;
        const y = col + dy;

        // if invaid continue
        if (x < 0 || x >= grid.length) continue;
        if (y < 0 || y >= grid[0].length) continue;
        if (grid[x][y] === 0 || grid[x][y] === 2) continue;

        queue.push([x, y]);
        grid[x][y] = 2;
        fresh--;
      }
    }

    output++;
  }

  return fresh === 0 ? output : -1;
};
