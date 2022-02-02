var User = class Person { } // var User = class { }

var tom = new User()
var bob = new User()


class Person {
    #name;
    age;
    static #retirement_age = 65

    constructor(name, age) {
        this.#name = name
        this.age = age
        console.log(`Объект "Person ${name} ${age}" успешно создан.`)
    }

    #check_name(name) { if (name != 'admin') return name }

    set_name(name) { if (name) this.#name = this.#check_name(name) }

    say_hi() { alert("Hello!") }

    go_to(place) { alert(`Going to ${place}.`) }

    print() {
        console.log(`Имя: ${this.#name}  Возраст: ${this.age}`)
        console.log(`Пенсионный возраст: ${Person.retirement_age}`)
    }

    static print_info(person) {
        console.log(`Имя: ${person.#name}  Возраст: ${person.age}`);
    }

    static calculateRestAges(person){
        if(this.#retirement_age > person.age){
            const restAges = this.#retirement_age - person.age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }
        else console.log("Вы уже на пенсии");
    }

}

var man1 = new Person('Tom', 21)
var man2 = new Person('Bob', 101)
man1.say_hi()
man1.go_to('Pivnushka')
man1.set_name('Arkadiy')
console.log(Person.retirement_age)
man1.print()
Person.print_info(man1)
Person.calculateRestAges(man1)
Person.calculateRestAges(man2)
