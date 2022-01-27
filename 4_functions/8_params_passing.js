function change(x){
    x = 2 * x;
    console.log("x in change:", x);
} 
var n = 10;
console.log("n before change:", n); // n before change: 10
change(n);                          // x in change: 20
console.log("n after change:", n);  // n after change: 10


function change(user) { user.name = "Tom" }
var bob ={ name: "Bob" }
console.log("before change:", bob);    // Bob
change(bob);
console.log("after change:", bob);     // Tom


function change(array){ array[0] = 8 }
function changeFull(array){ array = [9, 8, 7] }
var numbers = [1, 2, 3];
console.log("before change:", numbers);     // [1, 2, 3]
change(numbers);
console.log("after change:", numbers);      // [8, 2, 3]
changeFull(numbers);
console.log("after changeFull:", numbers);  // [8, 2, 3]
