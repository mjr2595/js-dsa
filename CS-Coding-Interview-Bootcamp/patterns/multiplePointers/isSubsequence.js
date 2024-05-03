function isSubsequence(sub, full) {
  if (full.length < sub.length) return false;

  let subPointer = 0;
  let fullPointer = 0;

  while (subPointer < sub.length && fullPointer < full.length) {
    // check if current chars are the same
    // if they are, move both up
    if (sub.charAt(subPointer) === full.charAt(fullPointer)) {
      subPointer++;
      fullPointer++;
    } else {
      // if they aren't, move up just fullPointer
      fullPointer++;
    }
  }
  return subPointer === sub.length;
}

// recursive solution
function isSubsequenceRecursive(sub, full) {
  if (sub.length === 0) return true;
  if (full.length === 0) return false;
  if (sub[0] === full[0])
    return isSubsequenceRecursive(sub.slice(1), full.slice(1));
  return isSubsequenceRecursive(sub, full.slice(1));
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
console.log(isSubsequence("abc", "ac")); // false
console.log(isSubsequence("jabascript", "javascript")); // false
