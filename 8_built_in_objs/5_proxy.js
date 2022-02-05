const target = { name: 'Tom', age: 21 }
const handler = {}
const proxy = new Proxy(target, handler)
console.log(proxy.name)

const handler2 = {
    get: function(target, prop, receiver) {
        return 'Tomas Smith'
    }
}
const proxy2 = new Proxy(target, handler2)
console.log(proxy2.name)

const handler3 = {
    get: function(target, prop) {
        return 'Name: ' + target.name
    }
}
const proxy3 = new Proxy(target, handler3)
console.log(proxy3.name)

const handler4 = {
    get: function(target, prop) {
        if (prop === 'name') {
            return target.name.toUpperCase()
        }
        return target[prop]
    },
    set: function(target, property, value, receiver) {
        if (property === 'age' && value < 1 || value > 129) {
            console.log('Невозможно, некорректный возраст')
        }
        console.log(`SET ${value} for ${target}`)
        target[property] = value
    }
}
const proxy4 = new Proxy(target, handler4)
console.log(proxy4.name)
console.log(proxy4.age)
proxy4.name = 'Azazaz'
proxy4.age = 999
console.log(proxy4.name)
console.log(proxy4.age)
