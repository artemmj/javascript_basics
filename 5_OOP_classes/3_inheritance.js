class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
     
    print() { console.log(`Name: ${this.name}  Age: ${this.age}`) }
}

class Employee extends Person {
    constructor(name, age, company) {
        super(name, age)
        this.company = company
    }

    print() {
        super.print()
        console.log(`Company: ${this.company}`);
    }

    work() { console.log(`${this.name} works in ${this.company}`) }
}

const tom = new Person("Tom", 34)
tom.print()
 
const sam = new Employee("Sam", 25, "Yandex")
sam.print()
sam.work()
