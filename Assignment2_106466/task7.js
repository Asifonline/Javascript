var fNumber= prompt("Please enter first number");
var sNumber= prompt("Please enter second number");
var Operator= prompt("Please enter operation type - /, *, -, +, %");
fNumber = parseInt(fNumber);
sNumber = parseInt(sNumber);
if (Operator === "/"){
document.write("First number is : " + fNumber + "</br>");
document.write("Second number is : " + sNumber +"</br>");
document.write("Operation is : " + Operator + "</br>");
document.write("Answer is : " + fNumber / sNumber);
}
else if (Operator === "*"){
document.write("First number is : " + fNumber + "</br>");
document.write("Second number is : " + sNumber +"</br>");
document.write("Operation is : " + Operator + "</br>");
document.write("Answer is : " + fNumber * sNumber);
}
else if (Operator === "+"){
document.write("First number is : " + fNumber + "</br>");
document.write("Second number is : " + sNumber +"</br>");
document.write("Operation is : " + Operator + "</br>");
document.write("Answer is : " + fNumber + sNumber);
}
else if (Operator === "-"){
document.write("First number is : " + fNumber + "</br>");
document.write("Second number is : " + sNumber +"</br>");
document.write("Operation is : " + Operator + "</br>");
document.write("Answer is : " + fNumber - sNumber);
}
else if (Operator === "%"){
document.write("First number is : " + fNumber + "</br>");
document.write("Second number is : " + sNumber +"</br>");
document.write("Operation is : " + Operator + "</br>");
document.write("Answer is : " + fNumber % sNumber);
}
else {
document.write("Wrong data entered");
}