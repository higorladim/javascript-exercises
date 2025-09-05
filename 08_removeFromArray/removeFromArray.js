const removeFromArray = function (array, ...theArgs) {
    console.log("theArgs: ", theArgs);
    let newArray = array;


    console.log("for started");
    for (let arg of theArgs) {

        if (newArray.includes(arg)) {
            console.log("Rodou o for");

            index = array.indexOf(arg);
            newArray = newArray.toSpliced(index, 1);


            while (newArray.includes(arg)) {
                index = newArray.indexOf(arg);
                newArray = newArray.toSpliced(index, 1);
            }
            
        } else {
            console.log("not in the for")
        }
    }

    console.log("fim do for", newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
