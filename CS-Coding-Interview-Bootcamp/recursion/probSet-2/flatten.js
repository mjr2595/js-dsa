function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // hit an array, recursively flatten it and then push each item to the result
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenWithReduce([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flattenWithReduce([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flattenWithReduce([[1], [2], [3]])); // [1, 2, 3]
console.log(flattenWithReduce([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
console.log(flattenWithReduce([[[[], [[[]]], [[[[[[[]]]]]]]]]])); // []

function flattenWithReduce(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flattenWithReduce(item));
    } else {
      return acc.concat(item);
    }
  }, []);
}
