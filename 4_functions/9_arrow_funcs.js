var print = mes => console.log(mes)
print("Hello Metanit.com")
print("Welcome to JavaScript")


var summ = (a, b) => a + b
result = summ(2, 3)
console.log(result)


var get_user = (user_name, user_age) => ({name: user_name, age: user_age})
get_user("tom", 20)
get_user("jack", 21)


const square = n => {
    result = n * n
    console.log('Result in function: ', result)
    return result
}
square(5)
square(25)
