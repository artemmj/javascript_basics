class Person{
    #id = ''
    #ageValue = 1
    #name = ''

    constructor(name, age, id){
        this.#name = name
        this.#ageValue = age
        this.#id = id
    }

    get age() { return this.#ageValue }
    set age(age) { if (age > 1) this.#ageValue = age }

    get name() { return this.#name }
    // set name(name) { this.#name = name }

    set id(value) { this.#id = value }

    get full_info() { return `${this.#name} ${this.#ageValue} ${this.#id}` }
    set full_info(valid_data) {
        [this.#name, this.#ageValue, this.#id] = valid_data.split(' ')
    }
}

const tom = new Person("Tom", 37, "t6qt2ertq2u76rq")
console.log(tom.age)
tom.age = -15
console.log(tom.age)
tom.name = "Bob"
console.log(tom.name)
console.log(tom.id)

tom.full_info = "Jack 32 3er23re7623e7r2367e"
console.log(tom)
