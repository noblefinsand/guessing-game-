var guessLog = [];
var attempts = 10;

//Reloads window
function newGame() {
  window.location.reload();
}

//Determines when game ends
function endGame() {
  if(attempts < 2) {
    displayOutput("lose");
    document.getElementById("submit").disabled = "true";
    document.getElementById("attempts").innerHTML = "No More Attempts";
  }
  else {
    attempts--; //Drops players attempts by 1 until reaches 0
    document.getElementById("attempts").innerHTML = attempts;
  }
}

//Generates a random number
function random() {
  randomNumber = Math.floor((Math.random()*100)+1);
}

//Checks users guess and compares it to random number
function checkUserGuess() {
  var userGuess = document.getElementById("guess").value;
  guessLog.push(userGuess);
  document.getElementById("guess-log").innerHTML = guessLog;

  if(userGuess > randomNumber) {
    displayOutput("high");
  }
  else if(userGuess == "") {
    displayOutput("error");
  }
  else if(userGuess < randomNumber) {
    displayOutput("low");
  }
  else {
    displayOutput("win");
    document.getElementById("submit").disabled = "true";
  }
}

//Contains all of the images
function displayOutput(result) {
  var image = "";
  var caption = "";
  switch (result) {
    case "error":
      image = "error.jpg";
      caption = "Please Enter a Valid Number";
      break;
    case "win":
      image = "win.jpg";
      caption = "Congratulations, you won! <br> Press New Game to play again";
      break;
    case "high":
      image = "high.jpg";
      caption = "So Close!";
      break;
    case "low":
      image = "low.jpg";
      caption = "So Close!";
      break;
    case "lose":
      image = "lose.jpg";
      caption = "Press New Game to Play Again";
      break;
  }
  document.getElementById("image").src = "img/" + image;
  document.getElementById("text").innerHTML = caption;
}
