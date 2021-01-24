//numbers to words
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];
var num =prompt("Please enter a positive number- up to 3 digits");

if (num < 0) {
document.write('Negative numbers are not supported.');
} 
else if (num === '0' ||num ==='00' || num=== '000')
{
document.write("zero");
}
//the range of 1 - 20
else if (num < 20) {
document.write(ones[num]);
}
else if (num.length === 2) {
document.write(tens[num[0]] + " " + ones[num[1]]);
}
//range of 100-999
else if (num.length === 3 && num[1] === '0' && num[2] === '0') {
  document.write(ones[num[0]] + " hundred");
}
else {
document.write(ones[num[0]] + " hundred and " + (tens[num[1]] +" " + ones[num[2]]));
}
