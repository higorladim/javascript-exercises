const removeFromArray = function(array, ...theArgs) {
    console.log("theArgs: ", theArgs);
    let newArray;
    for (const arg of theArgs){   

        console.log("arg: ", arg);
        console.log("array: ", array);
        
        if (arg > -1){
        index = array.indexOf(arg);
        console.log("index: ", index);
        array.splice(index, 1);
        }
    }
    
    console.log("array: ", array);
    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
