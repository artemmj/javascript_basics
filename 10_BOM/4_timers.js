function timeFunction() {
    console.log('Выполнение функции setTimeout().')
}
var timerId = setTimeout(timeFunction, 1000)
console.log(timerId)
clearTimeout(timerId)


function timeFunction2() {
    console.log('Выполнение функции setInterval().')
}
setInterval(timeFunction2, 1000)
