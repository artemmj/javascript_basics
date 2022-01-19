var myVar = null;

if (myVar === undefined)
    console.log(`myVar in undefined (${myVar})`)
else if (myVar === null)
    console.log(`myVar in null (${myVar})`)
else
    console.log(`myVar in norm (${myVar})`)

// switch case
const income = 100
switch (income) {
    case 100:
    case 200:
        console.log('100 или 200')
        break
    case 300:
        console.log('300')
        break
    default:
        console.log("Нет подходящего условия")
}
