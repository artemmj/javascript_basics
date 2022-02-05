const tom = Symbol('Tom')
console.log(tom)

const company = {
    [Symbol('Tom')]: 'senior',
    [Symbol('Jack')]: 'junior',
    [Symbol('Tom')]: 'junior',
}
const developers = Object.getOwnPropertySymbols(company)
for (developer of developers) {
    console.log(`${developer.toString()} - ${company[developer]}`)
}
