const palindromes = function (string) {
    let stringClean = string.replace(/[^\w\s\']|_/g, "");
    stringClean = stringClean.replace(/\s+/g, "");

    let stringReversed = reverse(stringClean);

    stringReversed = stringReversed.toUpperCase();
    stringClean = stringClean.toUpperCase();

    if (stringReversed === stringClean){
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
