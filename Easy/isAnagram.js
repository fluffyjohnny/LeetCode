/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const sArr = s.split("").sort();
  const tArr = t.split("").sort();

  if (sArr.join("") === tArr.join("")) return true;
  return false;
};

console.log(isAnagram("abc", "cba"));
