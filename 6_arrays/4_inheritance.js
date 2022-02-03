class Team extends Array {
    constructor(name, ...members) {
        super(...members)
        this.name = name
    }

    push(person) {
        if (person != 'admin') super.push(person)
    }
}

const barca = new Team('Barca', 'Tom', 'Sam', 'Bob')
console.log(barca)
for (let person of barca) {
    console.log(person)
}
barca.push('admin')
console.log(barca)
barca.push('QWEASDZXC')
console.log(barca)
