function print(){
    var a = 5
    let b = 8
    const CONST = 9
    console.log("Function print: a =", a)
    console.log("Function print: b =", b)
    console.log("Function print: const =", CONST)
}
print();
console.log("Global: a =", a)  // Uncaught ReferenceError: a is not defined

// var - видны вне блока
{
    var a = 5
}
console.log("a =", a)  // a = 5

// let - видны только в блоке
{
    let b = 5
    const c = 6 
}
console.log("b =", b)  // Uncaught ReferenceError: b is not defined
console.log("c =", c)  // Uncaught ReferenceError: c is not defined
