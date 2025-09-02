const repeatString = function (a, b) {
    
    if (b == 0) {
        return "";
    } else if (b < 0){
        return "ERROR";
    } else {
        
        let count = 0;
        let newString = "";

        while (count < b) {
            newString += a;
            count++;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
