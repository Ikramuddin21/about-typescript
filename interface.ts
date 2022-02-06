interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
    previousClub?: string[]
}

const messi: Player = {
    name: 'L Messi',
    club: 'Abahoni',
    salary: 324523,
    wife: 'Nosimon ara begum'
}

const hannan: Player = {
    name: 'A Hannan',
    club: 'Kolabagan',
    salary: 2000
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const karim: Developer = {
    name: 'Karim Kha',
    salary: 2233,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor: 'vs code',
    typingSpeed: 60
}