var strNumber1 = "123"
var strNumber2 = "456"
console.log(parseInt(strNumber1) + parseInt(strNumber2))

strNumber1 = "123hello"
strNumber2 = '456bye'
console.log(parseInt(strNumber1) + parseInt(strNumber2))

// NaN
console.log(parseInt("qwe"))
console.log(typeof(parseInt("qwe")))  // typeof(NaN) = Number
var result = isNaN("qwe")  // true
console.log(result)
