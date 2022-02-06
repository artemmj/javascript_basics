class Person {
    constructor(name, age) {
        if (age < 1) throw 'Возраст должен быть положительным!'

        this.name = name
        this.age = age
    }
    print() { console.log(`Name: ${this.name} Age: ${this.age}`) }
}

try {
    const tom = new Person('Tom', 0)
}
catch (error) {
    console.log('Ошибка: ', error)
}
