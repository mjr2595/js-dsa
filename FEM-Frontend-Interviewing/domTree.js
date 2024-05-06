// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function findElement(node, tree) {
  if (node === tree) return tree;
  for (let i = 0; i < tree.children.length; i++) {
    const found = findElement(node, tree.children[i]);
    if (found) return found;
  }
  return null;
}

function findElementIterative(node, tree) {
  const stack = [tree];
  while (stack.length) {
    const current = stack.pop();
    if (current === node) return current;
    stack.push(...current.children);
  }
  return null;
}
