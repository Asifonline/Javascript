//find a Mean of All Digits
var num = prompt("Please enter number");
var sum;
var mean;
if(num.length===0){
    document.write("no number entered");
}
else if (num.length===1){
sum=parseInt(num);
mean=sum;
document.write("You entered :" + num + "</br>");
document.write("Result is :" + sum);
document.write("Mean is : " + mean);
}
else if(num.length===2){
    sum = parseInt(num.charAt(0))+parseInt(num.charAt(1));
    mean=sum/2;
    document.write("You entered :" + num + "</br>");
    document.write("Sum is :" + sum + "</br>");    
    document.write("Mean is : " + mean.toFixed(2));
}
else if(num.length===3){
sum = parseInt(num.charAt(0))+parseInt(num.charAt(1))+parseInt(num.charAt(2));
mean=sum/3;
document.write("You entered :" + num + "</br>");
document.write("Sum is :" + sum + "</br>");
document.write("Mean is : " + mean.toFixed(2));    
}
else if( num.length===4){
    sum = parseInt(num.charAt(0))+parseInt(num.charAt(1))+parseInt(num.charAt(2))+parseInt(num.charAt(3));
    mean = sum/4;
    document.write("You entered :" + num + "</br>");
    document.write("Sum is :" + sum+"</br>");
    document.write("Mean is : " + mean.toFixed(2));
    }
else
document.write("up to four digits only");
