function get_factorial(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * get_factorial(n - 1)
    }
}
console.log(get_factorial(5))


function get_fibonacci(n) {
    if (n === 0) {
        return 0
    }
    else if (n === 1) {
        return 1
    }
    else {
        return get_fibonacci(n - 1) + get_fibonacci(n - 2)
    }
}
console.log(get_fibonacci(10))
