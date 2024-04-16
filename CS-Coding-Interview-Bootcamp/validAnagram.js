function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

// alt method with single lookup object
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let char of str1) {
    lookup[char] = ++lookup[char] || 1;
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char]--;
  }

  return true;
}

console.log(validAnagram2("", "")); // true
console.log(validAnagram2("aaz", "zza")); // false
console.log(validAnagram2("anagram", "nagaram")); // true
console.log(validAnagram2("rat", "car")); // false
console.log(validAnagram2("awesome", "awesom")); // false
console.log(validAnagram2("qwerty", "qeywrt")); // true
console.log(validAnagram2("texttwisttime", "timetwisttext")); // true
