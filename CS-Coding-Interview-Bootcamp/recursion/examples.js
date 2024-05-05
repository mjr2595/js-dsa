function sumRange(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(0));

function collectorOddValues(arr) {
  let res = [];

  function collect(input) {
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) res.push(input[0]);
    collect(input.slice(1));
  }

  collect(arr);
  return res;
}

function collectorOddValuesPure(arr) {
  let res = [];

  if (arr.length === 0) return res;
  if (arr[0] % 2 !== 0) res.push(arr[0]);

  return res.concat(collectorOddValuesPure(arr.slice(1)));
}

console.log(collectorOddValuesPure([1, 2, 3, 4, 5]));
