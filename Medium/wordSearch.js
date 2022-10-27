/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  let res = false;

  const backtrack = (row, col, i) => {
    if (!res) {
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return; // out of bound
      if (board[row][col] !== word[i]) return; // wrong letter
      if (i === word.length - 1) {  // got to the end
        res = true;
        return;
      }
      board[row][col] = null; // mark our path so don't backtrack again

      //try all directions
      backtrack(row + 1, col, i + 1);
      backtrack(row - 1, col, i + 1);
      backtrack(row, col + 1, i + 1);
      backtrack(row, col - 1, i + 1);
      board[row][col] = word[i]; // rest board from null
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) { // find first letter
        backtrack(i, j, 0);
        if (res) return res;
      }
    }
  }

  return res;
};
