var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
document.write("Outcome of --a is : " + "</br>");
document.write("a is: " + a + "</br>");
document.write("b is: " + b + "</br>");
document.write("result is: " + result + "</br>" + "</br>");
--a - --b;
document.write("Outcome of --a - --b is : " + "</br>");
document.write("a is: " + a + "</br>");
document.write("b is: " + b + "</br>");
document.write("result is: " + result + "</br>" + "</br>");

--a - --b + ++b;
document.write("Outcome of --a - --b + ++b is : " + "</br>");
document.write("a is: " + a + "</br>");
document.write("b is: " + b + "</br>");
document.write("result is: " + result + "</br>" + "</br>");

--a - --b + ++b + b--;
document.write("Outcome of --a - --b + ++b + b-- is : " + "</br>");
document.write("a is: " + a + "</br>");
document.write("b is: " + b + "</br>");
document.write("result is: " + result + "</br>" + "</br>");