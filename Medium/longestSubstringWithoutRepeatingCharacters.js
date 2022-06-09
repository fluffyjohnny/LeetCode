const lengthOfLongestSubstring = function (s) {
  let currentString = [];
  let longestStringLength = 0;

  for (let i = 0; i < s.length; i++) {
    // Attempt to get the current character's position in the current string
    const currentCharPosition = currentString.indexOf(s[i]);

    // Check if the current character exists in the current string
    if (currentCharPosition !== -1) {
      // Chop the array off after the occurence of the character
      currentString.splice(0, currentCharPosition + 1);
    }

    // Add the current character to the array
    currentString.push(s[i]);

    // Store the current string length if bigger than the existing record
    longestStringLength = Math.max(longestStringLength, currentString.length);
  }

  return longestStringLength;
};

console.log(lengthOfLongestSubstring("abbfqefqefqbabab"));
