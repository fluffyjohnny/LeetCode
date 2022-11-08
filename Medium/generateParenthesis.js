/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = [];

  const backtracking = (open, close, cur) => {
    if (close > open || open > n) return;
    if (open === n && close === n) {
      result.push(cur);
      return;
    }
    backtracking(open + 1, close, cur + "(");
    backtracking(open, close + 1, cur + ")");
  };

  backtracking(0, 0, '');

  return result;
};
