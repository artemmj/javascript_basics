var browser, userAgent = navigator.userAgent

if(userAgent.indexOf("Chrome") > -1) {
    browser = "Google Chrome";
} else if (userAgent.indexOf("Safari") > -1) {
    browser = "Apple Safari";
} else if (userAgent.indexOf("Opera") > -1) {
    browser = "Opera";
} else if (userAgent.indexOf("Firefox") > -1) {
    browser = "Mozilla Firefox";
} else if (userAgent.indexOf("MSIE") > -1) {
    browser = "Microsoft Internet Explorer";
}
document.write(browser)


function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
     
    document.write("Широта: " + latitude + "<br/>");
    document.write("Долгота: " + longitude + "<br/>");
    document.write("Высота: " + altitude + "<br/>");
    document.write("Скорость перемещения: " + speed + "<br/>");
};
 
function error(obj) {
    document.write("Ошибка при определении положения");
};
navigator.geolocation.getCurrentPosition(success, error);
