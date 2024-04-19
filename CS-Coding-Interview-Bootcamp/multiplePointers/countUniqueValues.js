function countUniqueValues(values) {
  let seen = new Set();
  values.map((v) => seen.add(v));
  return seen.size;
}

function countUniqueWithPointers(values) {
  if (values.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < values.length; j++) {
    if (values[i] !== values[j]) {
      i++;
      values[i] = values[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

console.log(countUniqueWithPointers([1, 1, 1, 1, 2])); // 2
console.log(countUniqueWithPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueWithPointers([])); // 0
console.log(countUniqueWithPointers([-2, -1, -1, 0, 1])); // 4
