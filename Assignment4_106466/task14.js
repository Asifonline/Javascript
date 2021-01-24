var now = new Date();
document.write("Current Date : " + now + "</br>");
var hour = now.getHours();
var lastHour = hour -1;
now.setHours(lastHour);
document.write("1 hours ago it was : " + now);