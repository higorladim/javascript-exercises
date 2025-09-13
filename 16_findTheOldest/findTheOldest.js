const findTheOldest = function (people) {
    //First i get current year to get the age from people who isn't dead yet
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let oldestPerson = {};
    let oldestPersonAge = 0;
    console.log("currentYear: ", currentYear);

    //After i need to get the age from each people of the array;

    people.forEach(element => {
        if (element.yearOfDeath === undefined) {
            element.age = currentYear - element.yearOfBirth;
        } else {
            element.age = element.yearOfDeath - element.yearOfBirth;
        }


        if (element.age > oldestPersonAge) {
            oldestPersonAge = element.age;
            oldestPerson = element;
        }


    });

    console.log("oldestPersonName: ", oldestPerson);
    console.log("oldestPersonage: ", oldestPersonAge);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
