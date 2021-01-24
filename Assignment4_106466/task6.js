//round number generation
var randomNumber=Math.random();
var num1 = randomNumber*5;
var num2 = num1+1;
var num3 = Math.floor(num2);
document.write(" </br>" + "Random dice value = " + num3);
var num4 = Math.ceil( num2);
document.write(" </br>" + "Random dice value = " + num4);