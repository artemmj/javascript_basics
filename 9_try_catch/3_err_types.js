class PersonError extends Error {
    constructor(value, ...params) {
        super(...params)
        this.name = 'PersonError'
        this.argument = value
    }
}

class Person{
    constructor(pName, pAge){
        const age = parseInt(pAge)
        if (isNaN(age)) {
            throw new PersonError("Возраст должен представлять число")
        }
        if (age < 0 || age > 120) {
            throw new PersonError("Возраст должен быть больше 0 и меньше 120")
        }
        this.name = pName
        this.age = age
    }
    print(){ console.log(`Name: ${this.name}  Age: ${this.age}`) }
}

try {
    // const tom = new Person("Tom", -45)
    const bob = new Person("Bob", "bla bla")
}
catch (error) {
    if (error instanceof TypeError) {
        console.log('Некорректный тип данных; ', error)
    }
    else if (error instanceof RangeError) {
        console.log('Недопустимое значение; ', error)
    }
    else if (error instanceof PersonError) {
        console.log('Ошибка типа Person; ', error, error.argument)
    }
    else {
        console.log(error)
    }
}
