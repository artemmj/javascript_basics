const a = 1
const b = 2
const result = a < b ? a : b
console.log(result)

// Оператор ??
const result1 = "hello" ?? "world";
console.log(result1);   // hello

let message = null;
const hello = "Hi JavaScript";
const result7 = message ?? hello;
console.log(result7);   // Hi JavaScript

// Оператор ??=
let message = "Welcome to JavaScript";
let text = "Hello work!"
text ??= message;
console.log(text);  // Hello work!

let message = "Welcome to JavaScript";
let text = null;
text ??= message;
console.log(text);  // Welcome to JavaScript
