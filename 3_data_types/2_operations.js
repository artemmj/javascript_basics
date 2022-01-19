let x = 10;
let y = x + 50;
x = 100;
y = x - 50;
let z = x * y;
console.log(z);
z = x / y;
console.log(z);

x = 5;
y = 2;
z = x % y;
console.log(z); // 1

const n = 2 ** 3;
console.log(n);  // 8
 
x = 3;
y = 2;
z = x ** y;
console.log(z);  // 9

// Префиксный инкремент
x = 5;
z = ++x;
console.log(x); // 6
console.log(z); // 6
     
// Постфиксный декремент
a = 5;
b = a--;
console.log(a); // 4
console.log(b); // 5

let income = 100;
let strIncome = "100";
let result1 = income == strIncome;
let result2 = income === strIncome;
console.log(result1);  // true
console.log(result2);  // false

