var currentDate = new Date();
var startDate = new Date ("January 1, 1970");
var timeInMinutes = currentDate.getTime() /1000 /60 ;
document.write("Current Date : " + currentDate+"</br>");
document.write("Elapsed Milliseconds since Jan 1, 1970 : " + currentDate.getTime()+"</br>");
document.write("Elapsed Minutes since Jan 1, 1970 : " + timeInMinutes);