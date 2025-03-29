const add = ((a, b) => a + b);

const subtract = ((a, b) => a - b);

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current, 1);
};

const power = function(num, exp) {
	let pwr = 1;
  for (let i = 0; i < exp; i++) {
    pwr *= num;
  }
  return pwr;
};

const factorial = function(num) {
	let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((total, current) => total * current, 1);
};

factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
