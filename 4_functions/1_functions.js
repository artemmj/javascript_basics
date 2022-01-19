function hello(message) {
    console.log(message)
}
let handler = hello
handler("Hello from func.")

// anonymous func
let show_message = function(message) {
    console.log(message)
}
show_message("Hello from anonymous func.")
show_message()

// Для примера
function sum(a, b, ...others) {
    console.log(arguments)
    console.log(others)

    if (a === undefined) {
        console.log("Передайте параметр а!")
    }
    if (b === undefined) {
        console.log("Передайте параметр b!")
    }
    const result = parseInt(a) + parseInt(b)
    return result
}
console.log(sum(1, 2, 3, 4, 5))

// Функции в кач. функций
function operation(a, b, func) {
    console.log(func(a, b))
}
operation(555, 555, sum)

function menu(n) {
    if (n == 1) {
        return function(a, b) {return a + b}
    }
    else if (n == 2) {
        return function(a, b) {return a - b}
    }
    else if (n == 3) {
        return function(a, b) {return a * b}
    }
    else if (n == 4) {
        return function(a, b) {return a / b}
    }
    return function(a, b) {return 'Некорректный номер.'}
}
let action = menu(1)
console.log(action(2, 4))
action = menu(2)
console.log(action(2, 4))
action = menu(3)
console.log(action(2, 4))
action = menu(4)
console.log(action(2, 4))
action = menu(999)
console.log(action(2, 4))
