// time complexity: O(n * m)
function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[j + i];
    }
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySumNaive([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySumNaive([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySumNaive([4, 2, 1, 6, 2], 4)); // 13

// sliding window approach
// time complexity: O(n)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = 0;
  let temp = 0;

  // first window
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  temp = max;

  // slide the window down until the end of array
  for (let j = num; j < arr.length; j++) {
    temp = temp - arr[j - num] + arr[j];
    max = Math.max(max, temp);
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
