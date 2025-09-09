const leapYears = function (year) {

    //Verifica se o ano pode ser bissexto;
    if (year % 4 !== 0) {
        console.log("caiu na primeira verificação e voltou falso")
        return false;
    }

    //Verifica se o ano é bissexto e se não é um século;
    if (year % 100 !== 0) {
        console.log("o ano é bissexto e não é um século");
        return true;

    }  

    if (year % 400 === 0) {
        console.log("o ano é um século, mas é divisível por 400, então é bissexto");
        return true;
    } else {
        console.log("o ano é um século mas não é divisível por 400, portanto não é bissexto");
        return false;
    }


};



// Do not edit below this line
module.exports = leapYears;
