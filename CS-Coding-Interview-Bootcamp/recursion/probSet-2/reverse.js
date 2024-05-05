function reverse(str) {
  if (str.length === 0) return "";
  return str.slice(-1) + reverse(str.slice(0, -1));
}

console.log(reverse("awesome")); // emosewa
console.log(reverse("rithmschool")); // loohcsmhtir
console.log(reverse("")); // ''
console.log(reverse("a")); // 'a'
