const palindromes = function (string) {
    let stringReversed = reverse(string);
    console.log("stringReversed: ", stringReversed);

    if (stringReversed === string){
        return true;
    } else {
        return false;
    }

};

function reverse(s){
    return s.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
