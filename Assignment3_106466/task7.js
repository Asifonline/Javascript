//merging two arrays and removing duplicates
var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
document.write("First array is :" + a +"</br>");
document.write("Second array is :" + b +"</br>");
var c = [];
c = b.concat(a);
Set = [...new Set(c)];
document.write("Output after merging two arrays and removeing duplciates is : [" + Set + "]");