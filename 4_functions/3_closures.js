function outer(){
    let x = 5;
    function inner(){
        x++;
        console.log(x);
    };
    return inner;
}
let fn = outer();   // fn = inner, так как функция outer возвращает функцию inner
// вызываем внутреннюю функцию inner
fn();   // 6
fn();   // 7
fn();   // 8


function multiply(n) {
    var x = n
    return function(m) { return m * x }
}
var fn1 = multiply(5)
var res1 = fn1(6)
console.log(res1)

var fn2 = multiply(4)(100)
console.log(res2)


// Самовызывающиеся функции
(function(){
    console.log("Привет мир");
}());
 
(function (n){
     
    var result = 1;
    for(var i=1; i<=n; i++)
        result *=i;
    console.log("Факториал числа " + n + " равен " + result);
}(4));
