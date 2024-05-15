function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 2)); // 1
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4
