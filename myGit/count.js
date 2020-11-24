const counter = function (arr) {
  return "这个数组里有" + arr.length + "个元素";
}

const adder = function (a, b) {
  return `a + b 之和为： ${a + b}`;
}

let pi = 3.14;

module.exports = {
  counter,
  adder,
  pi,
};