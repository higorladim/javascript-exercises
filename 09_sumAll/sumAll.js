const sumAll = function (num1, num2) {
    let sumAll = 0;
    const err = "ERROR";

    if (typeof num1 === "string" ||
        num1 < 0 ||
        num1 % 1 !== 0) {
        return err;

    } else if (typeof num2 === "string" ||
        num2 < 0 ||
        num2 % 1 !== 0) {
        return err;
    }

    if (num1 > num2) {
        sumAll = num1;
        for (let i = 0; num1 > num2; i++) {
            sumAll = sumAll + num2;
            num2++;
        };

        if (sumAll) {
            return sumAll;
        } else {
            return err;
        }
    }

    if (num1 < num2) {
        sumAll = num2;
        for (let i = 0; num1 < num2; i++) {
            sumAll = sumAll + num1;
            num1++;
        };

        if (sumAll) {
            return sumAll;
        } else {
            return err;
        }
    }

};

// Do not edit below this line
module.exports = sumAll;
