var number = parseFloat(prompt("Please enter a number in decimal"));
var decimal = parseInt(prompt("Pleaes enter required decimal level "));
var finalNumber = number.toFixed(decimal);
document.write("Input is " + number + " > Required decimal point is "+ decimal +"</br>");
document.write("Result is : " + finalNumber);
