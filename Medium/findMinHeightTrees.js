/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const indegree = Array.from({ length: n }, () => 0);

  if (n === 1) return [0]; // edge case: only 1 node

  // undirected graph
  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);

    indegree[x]++;
    indegree[y]++;
  }

  const output = [];

  // find and add leaf nodes which has degree of 1
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 1) output.push(i);
  }

  // while number of nodes > 2
  // odd: only one center nodes
  // even: two center nodes
  while (n > 2) {
    const len = output.length;
    n -= len; // subtract number of leaves removed

    // start taking out leaf nodes one by one until center nodes are found
    for (let i = 0; i < len; i++) {
      const x = output.shift();

      for (const y of graph[x]) {
        indegree[y]--;

        if (indegree[y] === 1) output.push(y); // add new leaf nodes
      }
    }
  }

  return output;
};

console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
);
