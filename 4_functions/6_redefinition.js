function display(){
    console.log("Доброе утро");
    display = function(){
        console.log("Добрый день");
    }
}
display(); // Доброе утро
display(); // Добрый день


function display(){
    console.log("Доброе утро");
    display = function(){
        console.log("Добрый день");
    }
}
// присвоение ссылки на функцию до переопределения
var displayMessage = display;
display(); // Доброе утро
display(); // Добрый день
displayMessage(); // Доброе утро
displayMessage(); // Доброе утро
