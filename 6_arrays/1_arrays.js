var users = new Array('Tom', 'Bill', 'Jack')
var people = ['Tom', 'Bill', 'Jack']

users[3] = 'Kate'
users[4] = 'Artem'
console.log(users)


var array = Array.from('Hello')
console.log(array)


var array = [1, 2, 3, 4, 5]
const numbers = Array.from(array, n => n * n)
console.log(numbers)

var array = Array.from({length: 3, 0: 'Tom', 1: 'Sam', 2: 'Alice'}, (element, idx) => {
    console.log(element, idx)
    return element
})
console.log(array.length)

for (i = 0; i < array.length; i++) {
    console.log(array[i])
}
