var bio = prompt("Please enter biology marked obtained out of 100");
var chem = prompt("Please enter chemistry marks obtained out of 100");
var phy = prompt("Please enter physics marks obtained out of 100");
var obtainedMarks = parseInt(bio) + parseInt(chem) + parseInt(phy);
var totalMarks = 300;
var marksPercent = (obtainedMarks / totalMarks) * 100;
marksPercent = marksPercent.toFixed(0);
var Grade;
var Remarks;
if ( marksPercent >= 80){
Grade = "A-one";
Remarks = "Excellent";
document.write("<h1> Marks Sheet </h1>" + "</br>");
document.write(" Total Marks : " + totalMarks + "</br>");
document.write("Marks Obtained : " + obtainedMarks + "</br>");
document.write("Percentage : " + marksPercent + "%" + "</br>");
document.write("Grade : " + Grade + "</br>");
document.write("Remarks : " + Remarks + "</br>");
}
else if ( marksPercent >= 70){
Grade = "A";
Remarks = "Good";
document.write("<h1> Marks Sheet </h1>" + "</br>");
document.write(" Total Marks : " + totalMarks + "</br>");
document.write("Marks Obtained : " + obtainedMarks + "</br>");
document.write("Percentage : " + marksPercent + "%" + "</br>");
document.write("Grade : " + Grade + "</br>");
document.write("Remarks : " + Remarks + "</br>");
}
else if ( marksPercent >= 60){
Grade = "B";
Remarks = "You need to improve";
document.write("<h1> Marks Sheet </h1>" + "</br>");
document.write(" Total Marks : " + totalMarks + "</br>");
document.write("Marks Obtained : " + obtainedMarks + "</br>");
document.write("Percentage : " + marksPercent + "%" + "</br>");
document.write("Grade : " + Grade + "</br>");
document.write("Remarks : " + Remarks + "</br>");
}
else{
Grade = "Fail";
Remarks = "Sorry";
document.write("<h1> Marks Sheet </h1>" + "</br>");
document.write(" Total Marks : " + totalMarks + "</br>");
document.write("Marks Obtained : " + obtainedMarks + "</br>");
document.write("Percentage : " + marksPercent + "%" + "</br>");
document.write("Grade : " + Grade + "</br>");
document.write("Remarks : " + Remarks + "</br>");
}