var users = ['Tom', 'Sam', 'Alice']
console.log(users)
console.log(...users)


var people1 = [...users]
var people2 = new Array(...users)
var people3 = Array.of(...users)
console.log(people1)


const mens = ["Tom", "Sam", "Bob"]
const womens = ["Kate", "Alice", "Mary"]
var people = [...mens, ...womens, 'Еще что-то', 'И еще что-то']
console.log(people)

function print(fp, sp, tp, ...others) {
    console.log(fp)
    console.log(sp)
    console.log(tp)
    console.log(others)
}
print(...people)


var people = ['Tom', 'Sam', 'Alice']
var employees = [...people]
employees[0] = 'ASDASDASD'
console.log(people)
console.log(employees)

var people = [{name: 'Sam'}, {name: 'Dan'}, {name: 'Alice'}]
var employees = [...people]
employees[0].name = 'ASDASDASD'
console.log(people)
console.log(employees)
employees[0] = {name: 'QQQQQQQ'}
console.log(employees)
