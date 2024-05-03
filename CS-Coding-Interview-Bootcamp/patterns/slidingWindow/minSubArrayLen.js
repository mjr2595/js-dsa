function minSubArrayLen(nums, sum) {
  let total = 0;
  let left = 0;
  let right = 0;
  let minLen = Infinity;

  while (right < nums.length) {
    // Add the current number to the total while it's less than the required sum
    total += nums[right];
    // Once the total meets or exceeds the sum, shrink the window from the left
    while (total >= sum) {
      minLen = Math.min(minLen, right - left + 1);
      total -= nums[left];
      left++;
    }
    // Expand the window to the right
    right++;
  }
  // If the minLen is still Infinity, return 0 since no subarray was found
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
