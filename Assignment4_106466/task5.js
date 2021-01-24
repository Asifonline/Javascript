//rounding off a number
var number=parseFloat(prompt("please enter a positive number"));
document.write("Number entered :" + number+ "</br>");
var roundedNumber= Math.round(number);
document.write("round off value :" + roundedNumber+"</br>");
var lowestNumber = Math.floor(number);
var highestNumber = Math.ceil(number);
document.write("Floor value:" + lowestNumber+ "</br>");
document.write("Ceil value :" + highestNumber+ "</br>");