function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right && left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return true;
    } else if (sum < 0) {
      left++;
    } else right--;
  }
  return false;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // true
console.log(sumZero([-2, 0, 1, 3])); // false
console.log(sumZero([1, 2, 3])); // false
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // true
console.log(sumZero([])); // false
console.log(sumZero([0])); // false
console.log(sumZero([0, 1])); // false
console.log(sumZero([-1, 1])); // true
console.log(sumZero([-1, 0, 1, 2])); // true
console.log(sumZero([-1, 0, 1, 2, 3])); // true
