/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const knownZeros = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        knownZeros.push([i, j]);
      }
    }
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        let smallestDelta = null;

        for (let k = 0; k < knownZeros.length; k++) {
          const delta =
            Math.abs(i - knownZeros[k][0]) + Math.abs(j - knownZeros[k][1]);
          if (smallestDelta === null || delta < smallestDelta) {
            smallestDelta = delta;
          }
        }
        mat[i][j] = smallestDelta;
      }
    }
  }
  return mat;
};
