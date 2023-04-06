// TUPLE => a typed array with a predefined length
// and types for each index
let myTuple:[string, number, boolean] = ["Lucas", 40, true];

// TYPE => a way to indicate what types of data
// will be stored in the object
// it's like creating a class
// we could say interface as well (TYPE = INTERFACE)
type driver = { // or interface Driver {} (without =)
    name: string,
    since: number,
    active?: boolean,
    teams?: (string | number)[]
}

const MaxVerstappen: driver = {
    name: "Max",
    since: 2016,
    active: true,
    teams: [20061, "Red Bull"]
}

const driverFun = (driv: driver) => {
    if(driv.name) {
        return `Hello ${driv.name.toUpperCase()}!`
    }
    return "Hello!"
}
console.log(driverFun(MaxVerstappen));

// ENUMS - enumerated objects non existent in vanilla js
enum Grade {
    U = 1,
    D,
    C,
    B, 
    A,
}
console.log(Grade.U);



