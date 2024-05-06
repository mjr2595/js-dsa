/**
 * Debounce invokes `fn()` once `time` has elapsed. The timer is reset if any debounce calls take place
 * before time has elapsed.
 */

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

console.log(debounce(() => console.log("Hello"), 1000)()); // Hello
