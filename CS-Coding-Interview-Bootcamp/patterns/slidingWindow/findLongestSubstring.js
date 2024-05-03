function findLongestSubstring(str) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  const charSet = new Set();

  // Loop through str with right pointer
  while (right < str.length) {
    // Move left until we have a valid window without dupes
    while (charSet.has(str.charAt(right))) {
      charSet.delete(str.charAt(left));
      left++;
    }
    // Add current char to set
    charSet.add(str.charAt(right));
    // Calculate size of current window, compare with maxLen
    maxLen = Math.max(right - left + 1, maxLen);
    // Keep moving right
    right++;
  }
  return maxLen;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
