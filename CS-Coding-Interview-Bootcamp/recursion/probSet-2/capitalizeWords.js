function capitalizeWords(words) {
  if (words.length === 0) return [];
  return [words[0].toUpperCase(), ...capitalizeWords(words.slice(1))];
}

// Tests
console.log(capitalizeWords(["car", "taco", "banana"])); // ['CAR', 'TACO', 'BANANA']
