function anyCharCount(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (counts[char] > 0) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}

function alphaNumCharCount(str) {
  let counts = {};
  for (let char of str) {
    // if (/^[a-zA-Z0-9]+$/.test(char))
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      counts[char] = ++counts[char] || 1;
    }
  }
  return counts;
}

// alt helper function, faster than regex
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

console.log(alphaNumCharCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }
console.log(alphaNumCharCount("hello world")); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
console.log(alphaNumCharCount("")); // {}
console.log(alphaNumCharCount("123123")); // { '1': 2, '2': 2, '3': 2 }
console.log(alphaNumCharCount("Hello hi")); // { h: 2, e: 1, l: 2, o: 1, i: 1 }
console.log(alphaNumCharCount("Hello hi!")); // { h: 2, e: 1, l: 2, o: 1, i: 1, '!': 1 }
