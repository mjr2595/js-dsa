function collectStrings(obj) {
  let stringsArray = [];

  function helper(o) {
    for (let k in o) {
      if (typeof o[k] === "string") {
        stringsArray.push(o[k]);
      } else if (typeof o[k] === "object") {
        helper(o[k]);
      }
    }
  }

  helper(obj);
  return stringsArray;
}

// Tests
const obj = {
  stuff: "foo",
  data: {
    a: [1, 2, 3],
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
