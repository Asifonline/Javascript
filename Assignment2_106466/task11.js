var time = prompt("Please enter time in 24-hr format e.g. 1700");
time = parseInt(time);
if (time >= 500 && time < 1200){
    document.write("Good Morning");
}
else if ( time >= 1200 && time < 1700){
document.write("Good Afternoon");
}
else if ( time >= 1700 && time < 2100){
document.write("Good Evening");
}
else if ( time >= 2100 && time < 2359){
document.write("Good Night");
}