class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const persons = [new Person('Mary', 'Smith', 28), new Person('John', 'Smith', 35),
    new Person('Tigran', 'Petrosian', 41), new Person('Peter', 'Jackson', 18)];
function comparePersons(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
persons.sort(comparePersons);
console.log(persons);
console.log('===============================================');


const names = ["mary smith", "tigran Petrosian", "john smith", "peter jackson",];
names.sort(function(a, b) {
    return a.length - b.length;
});
console.log(names);


