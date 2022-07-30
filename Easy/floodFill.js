/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
  const oldColor = image[sr][sc];

  if (image === null || image.length < 1 || oldColor === color) {
    return image;
  }

  const fill = (r, c) => {
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== oldColor) {
      return;
    }
    image[r][c] = color;
    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, c - 1);
    fill(r, c + 1);
  };

  fill(sr, sc);

  return image;
};
