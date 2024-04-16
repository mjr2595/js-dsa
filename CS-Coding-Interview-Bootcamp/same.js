function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = new Map();
  let frequencyCounter2 = new Map();

  for (let val of arr1) {
    frequencyCounter1.set(val, (frequencyCounter1.get(val) || 0) + 1);
  }

  for (let val of arr2) {
    frequencyCounter2.set(val, (frequencyCounter2.get(val) || 0) + 1);
  }

  for (let key of frequencyCounter1.keys()) {
    if (!frequencyCounter2.has(key ** 2)) {
      return false;
    }

    if (frequencyCounter2.get(key ** 2) !== frequencyCounter1.get(key)) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
console.log(same([1, 2, 3], [4, 1, 9, 9])); // false
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
