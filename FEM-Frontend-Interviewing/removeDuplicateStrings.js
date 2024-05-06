// Create a function that takes a string and returns a
// new string with duplicates removed

function removeDuplicateStrings(str) {
  const arr = str.split(" ");
  return [...new Set(arr)].join(" ");
}

console.log(removeDuplicateStrings("This is is a test test string")); // This is a test string
console.log(removeDuplicateStrings("This is a test string")); // This is a test string
console.log(removeDuplicateStrings("This is is a test test string string")); // This is a test string
