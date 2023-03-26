let myName: string = "John";
let meaningOfLife: number;
let isLoading: boolean;
let album1: any;
let album2: number | string | boolean; 

myName = "Lucas";
meaningOfLife = 42;
isLoading = true;

album1 = 40;
album1 = "40";
album2 = true;

const sum = (a: number, b: number) => {
    return a + b
}
console.log(sum(2, "klopsik"));
