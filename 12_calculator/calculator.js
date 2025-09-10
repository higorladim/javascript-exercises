const add = function (num1, num2) {
  const result = num1 + num2;
  return result;
};

const subtract = function (num1, num2) {
  const result = num1 - num2;
  return result;
};

const sum = function (array) {
  let result = 0;
  const numbers = array;
  numbers.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function (array) {
  let result = 1;
  const numbers = array;
  numbers.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function (num1, num2) {
  const result = num1 ** num2;
  return result;
};

const factorial = function (num) {
  let result; 
  if (num === 0 || num === 1) { 
    console.log("caiu no if"); 
    return 1; 
  } else if (num < 0) { 
    return 1; 
  } else {
     console.log("caiu no else");
      for (i = num - 1; i > 1; i--) { 
        num = num * i; 
      } 
    } return num;
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
