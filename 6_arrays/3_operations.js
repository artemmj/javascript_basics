const users = ["Tom", "Sam", "Bill", "Alice", "Kate"]
const people = users
people[1] = 'ASDASDASD'
console.log(users)
console.log(people)


const users = ["Tom", "Sam", "Bill", "Alice", "Kate"]
const people = users.slice(1, 4)  // [...users]
people[1] = 'ASDASDASD'
console.log(users)
console.log(people)

users.push('pushed')
console.log(users)
last = users.pop()
console.log(last)
console.log(users)
first = users.shift()
console.log(first)
console.log(users)
users.unshift('pushed')
console.log(users)


const people = ["Tom", "Sam", "Bill", "Alice", "Kate"]
const deleted = people.splice(1, 3)
console.log(people)
console.log(deleted)


const men = ["Tom", "Sam", "Bob"]
const women = ["Alice", "Kate"]
const people = men.concat(women)


const peoples = ["Tom", "Sam", "Bob"]
const peoplesToStr = peoples.join('; ')
console.log(peoples)
console.log(peoplesToStr)


const numbers = [2, 20, 1111, 10, 1]
numbers.sort()
console.log(numbers)
numbers.sort((a, b) => a - b)
console.log(numbers)
numbers.reverse()
console.log(numbers)


const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"]
const firstIndex = people.indexOf("Tom");
const lastIndex = people.lastIndexOf("Tom");
const otherIndex = people.indexOf("Mike");
console.log(firstIndex); // 0
console.log(lastIndex);  // 3
console.log(otherIndex); // -1

if (people.includes('Bob')) {
    console.log('YES')
}


const numbers = [1, -12, 8, -4, 25, 42]
var passed = numbers.every(n => n > 0)
console.log(passed)
var passed = numbers.some(n => n > 0)
console.log(passed)
const filteredNumbers = numbers.filter(n => n > 0)
console.log(filteredNumbers)


const numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach(n => {
    console.log("Квадрат числа", n, "равен", n * n)
})


const numbers = [1, 2, 3, 4, 5, 6]
const cubos = numbers.map(n => n * n * n)
console.log(cubos)


const numbers = [1, 2, 3, 5, 8, 13, 21, 34]
const found = numbers.find(n => n >= 21)
console.log(found)
var index = numbers.findIndex(n => n > 21)
console.log(index)
var index = numbers.findIndex(n => n > 35)
console.log(index)


const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann", ["qwe", "asd"]]]]
const flattenPeople = people.flat()
console.log(flattenPeople)
const flattenPeople2 = people.flat(2)
console.log(flattenPeople2)
const flattenPeople3 = people.flat(Infinity)
console.log(flattenPeople3)
