/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let counting = (stairsRemaining, savedResults) => {
    if (stairsRemaining < 0) return 0;

    if (stairsRemaining === 0) return 1;

    if (savedResults[stairsRemaining]) return savedResults[stairsRemaining];

    savedResults[stairsRemaining] =
      counting(stairsRemaining - 1, savedResults) +
      counting(stairsRemaining - 2, savedResults);


    return savedResults[stairsRemaining];
  };

  return counting(n, {});
};
