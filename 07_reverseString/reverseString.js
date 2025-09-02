const reverseString = function(name) {
    let count = 0;
    let strSize = name.length;
    let strReversed = "";

    while (count <= strSize){
        let a = name.charAt(strSize);
        console.log("a = ", a);
        strReversed += a;
        console.log("strReversed = ", strReversed);
        strSize--;
        console.log("strSize = ", strSize);
    }
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
