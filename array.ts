const salary: number = 7500;
const friendSalaries: number[] = [7500, 12300, 17200, 588, 823];
const friends: string[] = ['Sakib', 'Rakib', 'john', 'Rahim'];

friendSalaries[0] = 12346;
friendSalaries.push(89832);

// friendSalaries[4] = '5446';
// friendSalaries.push = '908';

friends.push('Karim');
friends[2] = 'Fahim';

let max = 0;
for(const salary of friendSalaries) {
    if(salary > max) {
        max = salary;
    }
}