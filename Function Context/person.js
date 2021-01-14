class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(newName) {
        let pattern = /[A-Za-z]+ [A-Za-z]+/;
        if (pattern.test(newName)) {
            this.firstName = newName.split(' ')[0];
            this.lastName = newName.split(' ')[1];
        }
    }
}

// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName);//Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName);//George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName);//George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName)//Nikola
// console.log(person.lastName)//Tesla

let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName)
