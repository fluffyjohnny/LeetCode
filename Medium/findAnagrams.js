/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  if (!s || s.length < p.length) return [];

  // Result is the output array that stores start indices,
  // freqMap maps each character in p to its count

  const result = [],
    hashMap = {};
  let count = 0,
    start = 0,
    end = 0;

  for (let char of p) {
    if (hashMap[char] === undefined) count++;
    hashMap[char] = (hashMap[char] || 0) + 1;
  }

  // Iterate over s using two pointers (start and end)
  while (end < s.length) {
    let char = s[end]; // The 'current' character
    // If the current character exists in the frequency map, then decrement it's count
    // and if the count reaches 0, then we know we got the right # of occurences for it
    if (hashMap[char] !== undefined) {
      hashMap[char] -= 1;
      if (hashMap[char] === 0) count--;
    }
    end++;

    // Once we reach count = 0, then check to see if it is
    // a valid anagram and move the window to the right
    while (count === 0) {
      let temp = s[start];
      if (hashMap[temp] !== undefined) {
        hashMap[temp] += 1;
        if (hashMap[temp] > 0) count++;
      }

      // If it is valid, then add the start index to the result
      if (end - start === p.length) result.push(start);
      start++;
    }
  }
  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));
