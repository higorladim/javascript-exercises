// fibonacci sequence

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... 

const fibonacci = function(index) {

    let fib = Number(index);

    if (fib < 0){
        return "OOPS";
    }

    if(fib === 0){
        return 0;
    }else if (fib === 1){
        return 1;
    }

    let num1 = 0;
    let num2 = 1
    
    console.log("fib: ", fib);
    let result = 0;

    for (i = 1; fib > i; i++){
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
