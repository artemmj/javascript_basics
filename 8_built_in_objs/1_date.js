var currentTime = new Date()
console.log(currentTime)


var welcome
var myDate = new Date()
var hour = myDate.getHours()
var minute = myDate.getMinutes()
var second = myDate.getSeconds()

if (minute < 10) { minute = "0" + minute }
if (second < 10) { second = "0" + second }
if (hour < 12) { welcome = "Доброе утро" }
else if (hour < 17) { welcome = "Добрый день" }
else { welcome = "Добрый вечер" }

console.log(welcome + ", текущее время: " + hour + 
    ":" + minute + ":" + second)
