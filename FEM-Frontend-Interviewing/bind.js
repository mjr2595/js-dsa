// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }

    let baz = foo.bind({bar: 'hello'})

    baz(); // Hello
*/

Function.prototype.myBind = function (context, ...boundArgs) {
  const originalFunction = this;

  return function (...args) {
    return originalFunction.apply(context, boundArgs.concat(args));
  };
};

// Test cases for myBind
function greet(greeting, punctuation) {
  return `${greeting} ${this.name}${punctuation}`;
}

const person = { name: "John" };
const boundGreet = greet.myBind(person, "Hello");
console.log(boundGreet("!")); // Hello John!
console.log(greet("?")); // ? undefinedundefined
