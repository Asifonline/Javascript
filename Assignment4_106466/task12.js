var day = new Date ();
var newDay = day.getUTCDate();
if (newDay < 16){
document.write("First 15 days of the month");
}
else{
document.write("Last 15 days of the month");
}