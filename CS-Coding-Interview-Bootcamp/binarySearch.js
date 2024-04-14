function binarySearch(list, target) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    // let mid = Math.floor((low + high) / 2); // this can cause overflow
    let mid = Math.floor(low + (high - low) / 2); // to avoid overflow
    if (list[mid] === target) {
      return mid;
    } else if (list[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // 8
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // 5
