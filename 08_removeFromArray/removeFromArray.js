const removeFromArray = function (array, ...theArgs) {
    let newArray = [...array];
    let index = 0;

    for (let arg of theArgs) {
        
        while (newArray.includes(arg)) {           
            index = newArray.indexOf(arg);
            newArray = newArray.toSpliced(index, 1);
        }        
    }
    console.log("fim do for", newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
