"use strict"

var userChoice = prompt("Do you choose rock, paper, or scissors?");

var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";}

else if (computerChoice <= 0.67) {
  computerChoice = "paper";
}
else{
  computerChoice = "scissors";
}

var compare = function(x, y) {
  if (x === y) {
    return "Tie";
  }
  else if (x === "rock") {
    if (y === "scissors") {
      return "You Wins";
    }
    else {
      return "Computer Win";
    }
}
  else if (x === "paper") {
      if (y === "rock") {
        return "You Wins";
      }
      else {
        return "Computer Win";
      }
    }
  else if (x === "scissors") {
      if (y === "paper") {
        return "You Wins";
      }
      else {
        return "Computer Win";
      }
    }
  }


document.write("computer chose: " + computerChoice + "</br>");
document.write(compare(userChoice,computerChoice));
