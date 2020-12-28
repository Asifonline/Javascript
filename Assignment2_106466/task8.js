var num = prompt("Please enter a number - Positive, negative or zero");
num = parseInt(num);
var sign = Math.sign(num);

if (sign === -1) {
document.write("You have entered a negative number " );
}
else if (sign === +1) {
document.write("You have entered a positive number " );
}
else if (sign === 0) {
document.write("You have entered a 0 " );
}
else {
document.write("You have not entered requested value");
}
