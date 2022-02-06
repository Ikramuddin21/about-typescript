const city: string = 'Dhaka';
const fruits: string [] = ['Mango', 'Banana', 'Apple'];

type Person = {
    name: string,
    age: number,
    salary: number
}

const student: Person = {
    name: 'Kamal Khan',
    age: 69,
    salary: 8990
}

const employee: {name: string, age: number, salary: number} = {
    name: 'Rahim',
    age: 28,
    salary: 79898
}

function getSalary (player: {name: string, salary: number}): number {
    return player.salary = 23;
}
getSalary({name: 'Kuddus', salary: 50});

function getSalary2 (player: Person): number {
    return player.salary;
}