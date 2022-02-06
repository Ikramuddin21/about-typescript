"use strict";
const myNumber = 15;
const myName = 'John';
console.log('Hello from typescript', myNumber, myName);
let money = 8998;
let honey = 'TypeScript';
let funny = true;
console.log(honey);
function add(first, second) {
    const result = first + second;
    return result;
}
const output = add(34, 348);
function doubleConsole(number) {
    console.log(2 * number);
}
// multi purpose
// function add(first: number | string, second: number | string): number | string {
//     const result: string | number = first + second;
//     return result;
// }
// const output: number = add(34, 348);
// const fullName = add('Alam', 'Mia');
