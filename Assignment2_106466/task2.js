var sColor = prompt("Please enter signal color");
if (sColor === "Red" || sColor === "red"){
document.write("Must stop");
} else if (sColor === "Green" || sColor === "green") {
document.write("Move now");
} else if (sColor === "Yellow" || sColor === "yellow") {
document.write("Ready to move");
}
else
{
document.write("Wrong option entered");
}