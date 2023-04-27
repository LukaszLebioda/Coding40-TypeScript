// "noEmitOnError": false 

// VARIABLES -----------------------------------------

/*
datatype doesn't have to be explicitely specified;
it's inferred by TS as 'string' in our example;
but still reassinging with number variable throws an error
*/

let name = "Lucash";
name = 40;

/*
however we can explicitely state the variable type in TS;
it's useful, eg. when we initialize a variable with no value yet;
we can't assign a variable with different type later on;
we can also use UNION type (see "mixedVariable" below);
*/

let statusCode: number = 100;
let statusText: string;
let userAge: number;
let isLoggedIn: boolean;
statusText = "OK";
userAge = 40;
statusText = 201;
userAge = "40";

let mixedVariable: string | number | boolean;
mixedVariable = 100;
mixedVariable = "TS";
mixedVariable = false;

// FUNCTIONS -------------------------------------------

// no datatype of parameter specified (inferred as type 'any')
// sending string as a parameter to mathematical function is possible 
const circumference = (diameter) => { return diameter * Math.PI };
let circum = circumference("Hello!");
console.log(circum);

// ARRAYS ------------------------------------------

/*
TS infers what datatypes are stored in an array;
if it's an array of strings, pushing new strings is OK;
but pushing other datatypes will throw an error;
and we can't change the array into other object / variable;
*/

let names = ["Kasia", "Ania", "Ola"];
names.push("Jola");
names.push(123);
names[0] = true;
names = "regular variable";

/*
we can however declare an array with different datatypes;
and then it's ok tu push / change values;
*/

let mixedArray = ["Lucas", 40, true];
mixedArray.push("Lebioda", false, 20);
mixedArray[4] = 21;

/*
we can of course explicitely state which datatypes are going to be stored in an array;
we can also initialize with no values yet;
or we can use UNION type (like with regular variables);
*/

let statedArray1: string[] = ["Mike", "Dustin", true, 20];
let statedArray2: string[] = ["Mike", "Dustin", "Will", "Lucas"];
let statedArray3: number[]; // we can't push (no array); 
let statedArray4: number[] = []; // we can push (empty, but array);

let unionArray1: string | number [] = []; // no brackets - BAD
let unionArray2: (string | number)[] = []; // brackets - GOOD
unionArray2.push(101);
unionArray2.push("TypeScript");
unionArray2.push(false);

// OBJECTS ---------------------------------------------

/*
the types of properties' values are inferred by TS;
we can't change the types later on;
we cant's add additional properties;
and we can't change person object into sth else;
*/

let person = {
    name: "Lucas",
    age: 40,
    ifStudent: false
}

person.age = 42; 

person.age = "42"; 
person.skills = ["attack", "defence", "stamina"];
person = [1,2,3,4]

/*
we can reassing properties within the same object;
however new properties' datatypes have to match exactly those declared in the initial object;
if there is no match, or a property is missing, 
or there will be new property added, the error will be thrown;
*/

person = {
    name: "Lukasz",
    age: 41,
    ifStudent: true
}
 
person = {
    name: "Lucas",
    age: 40,
    // ifStudent: true,
}

person = {
    name: 40,
    age: "Lucas",
    ifStudent: 13
}

person = {
    name: "Lukasz",
    age: 41,
    ifStudent: true,
    favDriver: "Verstappen"
}

/*
we can explicitely state, that we're creating an object;
and then we can assign properties to it in the next step;
but it would still be possible to assign an empty array to it
*/

let person2: object;

person2 = {
    name: "sddfv",
    age: 43453
}

person2 = [];

/*
so the safest way to create an object;
is to create it like this (below);
then we create an object precisely according to the pattern;

*/
 let person3: {
    name: string,
    age: number,
    ifStudent: boolean
 }

 person3 = {
    name: "Booo",
    age: 101,
    ifStudent: true,
 }

 // ------------------------------------------

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
// console.log(driverFun(MaxVerstappen));

// ENUMS - enumerated objects non existent in vanilla js
enum Grade {
    U = 1,
    D,
    C,
    B, 
    A,
}
// console.log(Grade.U);

 
