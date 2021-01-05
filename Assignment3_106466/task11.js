var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var response = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am? ");
if ( response === A[0]){
document.write("cake is available at index " + A.indexOf('cake') + " of our bakery");
}
else if ( response === A[1]){
document.write("applie pie is available at index " + A.indexOf('apple pie') + " of our bakery");
}
else if ( response === A[2]){
document.write("cookie is available at index " + A.indexOf('cookie') + " of our bakery");
}
else if ( response === A[3]){
document.write("chips is available at index " + A.indexOf('chips') + " of our bakery");
}
else if ( response === A[4]){
document.write("patties is available at index " + A.indexOf('patties') + " of our bakery");
}
else {
document.write("We are sorry. " + response + " is <b>not available </b> in our bakery")
}