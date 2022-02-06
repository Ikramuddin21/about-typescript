const myNumber = 15;
const myName = 'John';
console.log('Hello from typescript', myNumber, myName);

let money: number = 8998;
let honey: string = 'TypeScript';
let funny: boolean = true;

console.log(honey);


function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output = add(34, 348);

function doubleConsole(number: number): void {
    console.log(2 * number);
}


// multi purpose
// function add(first: number | string, second: number | string): number | string {
//     const result: string | number = first + second;
//     return result;
// }

// const output: number = add(34, 348);
// const fullName = add('Alam', 'Mia');