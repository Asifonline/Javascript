//password validation
var input = prompt ( "Please enter your password");
if (input.length < 8){
    document.write("Password must be more than 8 characters ");
}
else if (input.search(/[A-Za-z]/i) < 0){
    document.write("password should contain at least one alphabet character,");

}
else if (input.search(/[0-9]/) < 0){
    document.write("Password should contain at least one number");
}
else if (input.charAt(0) <= 9){
    document.write("password should not start with a number");
}
else {
    document.write("correct password");
}