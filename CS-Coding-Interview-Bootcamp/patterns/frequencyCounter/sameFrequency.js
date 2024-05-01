function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) return false;

  let occurrences = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < num1String.length; i++) {
    let currChar = num1String.charAt(i);
    let currNum = parseInt(currChar);
    occurrences[currNum]++;
  }

  for (let i = 0; i < num2String.length; i++) {
    let currChar = num2String.charAt(i);
    let currNum = parseInt(currChar);
    occurrences[currNum]--;
  }
  return occurrences.every((val) => val === 0);
}

console.log(sameFrequencyMySolution(182, 281)); // true
console.log(sameFrequencyMySolution(34, 14)); // false
console.log(sameFrequencyMySolution(3589578, 5879385)); // true
console.log(sameFrequencyMySolution(22, 222)); // false
