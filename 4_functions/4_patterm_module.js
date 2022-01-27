let foo = (function() {
    let obj = { greets: "Hello" }

    return {
        display: function() {
            console.log(obj.greets)
        }
    }
})()
foo.display()


let calculator = (function() {
    let data = { number: 0 }

    return {
        set_first: function(n) {
            data.number = n
        },
        sum: function(n) {
            data.number += n
        },
        subtract: function(n) {
            data.number -= n
        },
        display: function() {
            console.log("Number: ", data.number)
        },
        reset: function() {
            data.number = 0
        }
    }
})()
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();   // Result: 9
