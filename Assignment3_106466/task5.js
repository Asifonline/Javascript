//to remove all duplicate items from an array
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
document.write("Complete array is " + arr1 +"</br>");
Set = [...new Set(arr1)];
document.write("Unique Array values are " + Set);