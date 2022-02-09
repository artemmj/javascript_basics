var user = {
    name: 'Tomas',
    married: true,
    age: 30
}

var serializedUser = JSON.stringify(user)
console.log(serializedUser)

var deserialized_user = JSON.parse(serializedUser)
console.log(deserialized_user)
