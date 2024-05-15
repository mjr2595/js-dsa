function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      // If the value is a number, convert it to a string
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // If the value is an object, keep going
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      // Otherwise, keep the value as is
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// Tests
const originalObj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const stringifiedObj = stringifyNumbers(originalObj);

console.log(originalObj);
// Output: { num: 1, test: [], data: { val: 4, info: { isRight: true, random: 66 } } }

console.log(stringifiedObj);
// Output: { num: '1', test: [], data: { val: '4', info: { isRight: true, random: '66' } } }
