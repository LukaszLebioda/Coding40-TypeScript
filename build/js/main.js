"use strict";
// TUPLE => a typed array with a predefined length
// and types for each index
let myTuple = ["Lucas", 40, true];
const MaxVerstappen = {
    name: "Max",
    since: 2016,
    active: true,
    teams: [20061, "Red Bull"]
};
const driverFun = (driv) => {
    if (driv.name) {
        return `Hello ${driv.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(driverFun(MaxVerstappen));
// ENUMS - enumerated objects non existent in vanilla js
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
