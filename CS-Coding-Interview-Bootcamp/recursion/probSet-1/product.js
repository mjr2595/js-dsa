function productOfArray(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([0, 1, 2, 3])); // 0
console.log(productOfArray([1, 2, 3, 0])); // 0
console.log(productOfArray([1, 2, 3, -1])); // -6
console.log(productOfArray([])); // 0
console.log(productOfArray([1])); // 1
