var sNumber = 9;
var guess = prompt("Guess a number between 1 - 10");
guess= parseInt(guess);
if (guess === sNumber){
document.write("Bingo!! .. Right Answer");
}
else if (guess === sNumber+1 || guess === --sNumber){
document.write("Close enough to the secret number");
}
else {
    document.write("Better luck next time");
}