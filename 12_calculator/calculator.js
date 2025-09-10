const add = function(num1, num2) {
	const result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	const result = num1 - num2;
  return result;
};

const sum = function(array) {
  let result = 0;
  const numbers = array;
	numbers.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
