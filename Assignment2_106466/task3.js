//part a
var a = 4; 
if (++a === 5) {
alert("given condition for variable a is true");//condition true so message displayed
} 
//part b
var b = 82; 
if (b++ === 83){
alert("given condition for variable b is true");//condition not true hence message not displayed
}
// part c
var c = 12; 
if (c++ === 13){
alert("condition 1 is true"); //condition not true hence message not displayed
}
if (c === 13){
alert("condition 2 is true"); //condition true hance message displayed
}
if (++c < 14){
alert("condition 3 is true"); //condition not true hence message not displayed
}
if(c === 14){
alert("condition 4 is true"); //condition true hance message displayed
}
// part d
var materialCost = 20000; 
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");// condition true, hence message displayed
}
if (true){
alert("True");// message displayed
}
// part e
if (false){ 
alert("False"); // message not diaplayed
}
// part f
if("car" < "cat"){ 
alert("car is smaller than cat");// message displayed
}