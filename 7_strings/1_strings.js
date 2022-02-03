var person = 'Tom'
console.log(`В строке ${person} ${person.length} символов`)
console.log(`repeat(): ${person.repeat(5)}`)


const hello = "привет мир. пока мир"
const key = 'мир'
const firstPos = hello.indexOf(key)
const lastPos = hello.lastIndexOf(key)
console.log('first:', firstPos)
console.log('last:', lastPos)
console.log(hello.includes('мир.'))


const hello = "привет мир. пока мир"
var subHello = hello.substring(7, 10)
console.log(subHello)
subHello = hello.substring(12)
console.log(subHello)
 subHello = hello.slice(7, 10)
console.log(subHello)
subHello = hello.slice(12)
console.log(subHello)
console.log(hello.toUpperCase())
console.log(hello.charAt(2))
console.log(hello.charCodeAt(2))


const hello = "Завтрак: чай. Обед: чай. Ужин: чай."
new_hello = hello.replace('чай', 'МЯСОО')
console.log(new_hello)
all_new_hello = hello.replaceAll('чай', 'МЯСОО')
console.log(all_new_hello)


const message = "Сегодня была прекрасная погода"
const messageArray = message.split(' ')
console.log(messageArray)


const hello = "let me speak from my heart";
console.log(hello.startsWith("let"))  // true
console.log(hello.startsWith("Let"))  // false
console.log(hello.startsWith("lets"))  // false
console.log(hello.endsWith("heart"))  // true
console.log(hello.startsWith("bart"))  // false
