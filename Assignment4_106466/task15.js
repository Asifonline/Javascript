var now = new Date();
var age= parseInt(prompt(" Please enter your age "));
var currentYear = now.getFullYear();
var theBirthYear = currentYear - age;
document.write("Your age is " + age+ "</br>")
document.write("Your birth year is " + theBirthYear);
