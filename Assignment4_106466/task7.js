//counting part of text characters
var myText = "The quick brown fox jumps over the lazy dog.";
var count1 = myText.split("The").length - 1;
var count2 = myText.split("the").length - 1;
var count = count1+count2;
document.write("Text : " + myText+"</br>");
document.write("There are " + count + " occurances of the word 'the'");
