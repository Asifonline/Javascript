//to validate email address
var email = prompt("please add valid email address");
if (email.includes('@')!= true || (email.includes('.')!= true)) {
    document.write("Email should contain @ and . after @ ");
}
else if (email.indexOf('@') > email.indexOf('.')) {
    document.write("there should be a dot(.) after @");
}
else if (email.indexOf('@')<1){
document.write("There should be at least one character before @");
}
else{
    document.write("Email entered is correct");
}
