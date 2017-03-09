var gRandomNumber = Math.floor(Math.random() * words.length);
var gAnswer = words[gRandomNumber]; //The word you have to guess
var gLetters = gAnswer.split(""); //The first letter of the word you have to guessvar gSubmits = 5;
var gRows = 0;
var gAttempts = 1;
var gSubmits = 5;

function startGame() {
  var userInput = document.getElementById('UserInput').value;
  document.getElementById("Attempts").innerHTML = gSubmits + " attempts left.";
  document.getElementById("1_0").innerHTML = gLetters[0];
  var inputLetters = userInput.split("");
}

function checkInput() {
  //var cols = document.getElementById("radio").length;
  //console.log(cols);
  // copy input to empty row
  var checkInput = document.getElementById("UserInput").value;
  var inputArray = checkInput.split("");
  for (i = 0; i < 5; i++) {
    var letterNum = gAttempts.toString() + "_" + i;

    //good
    if (inputArray[i] == gLetters[i]) {
      document.getElementById(letterNum).style.backgroundColor = "green";
      //Contains
    } else if (gLetters.indexOf(inputArray[i]) > -1) {
      document.getElementById(letterNum).style.backgroundColor = "yellow";
    }
  }
  if (checkInput.length == 5) {
    CopyInputToEmptyRow();
    gSubmits--;
    document.getElementById("Attempts").innerHTML = gSubmits + " attempts left.";
    if (checkInput == gAnswer) {
      document.getElementById("Game").innerHTML = "<h1 class='YouWon'>You won! <br/>" + gAnswer + " was correct!</h1>";
      document.getElementById("msgBox").innerHTML = "";
      document.getElementById("smallMsg").innerHTML = "";
      $("button").toggleClass("invisible");
    }
    console.log("Checking checkInput: " + checkInput);
    console.log("Checking gAnswer: " + gAnswer);
  }
  if (gSubmits < 1) {
    document.getElementById("Game").innerHTML = "<h1 class='GameOver'> BIEEEMMMM you're ded!</h1><br/><div class='Gun' style='width: 120%;height: 200px;margin: auto;float: left;margin-top: -380px;'><img src='https://pbs.twimg.com/profile_images/1517890377/Drool_face_400x400.png' style='width: auto; height: 100px; float: left;border-radius: 50%;'/><img src='https://upload.wikimedia.org/wikipedia/commons/d/d0/Kriss_Vector_SMG_Realistic.png' style='width: auto; height: 100px; float: right;'/></div>";
    document.getElementById("msgBox").innerHTML = "";
    document.getElementById("smallMsg").innerHTML = "";
    $("button").toggleClass("invisible");
  }
  if (checkInput.length !== 5) {
    alert("Please enter at 5 characters!");
  }

}

function CopyInputToEmptyRow() {
  var userInput = document.getElementById('UserInput').value;
  var inputArray = userInput.split("");
  var curRow = document.getElementById("row" + gAttempts);
  var clicks = document.getElementsByTagName('input' [0]);
  if (gAttempts <= 4) {
    clicks.onclick = gAttempts++;
    var curRow = document.getElementById("row" + (gRows + 1));
    var displayLetter1 = document.getElementById((gRows + 1) + "_0").innerHTML = inputArray[0];
    var displayLetter2 = document.getElementById((gRows + 1) + "_1").innerHTML = inputArray[1];
    var displayLetter3 = document.getElementById((gRows + 1) + "_2").innerHTML = inputArray[2];
    var displayLetter4 = document.getElementById((gRows + 1) + "_3").innerHTML = inputArray[3];
    var displayLetter5 = document.getElementById((gRows + 1) + "_4").innerHTML = inputArray[4];
  }

  clicks.onclick = gRows++;

  document.getElementById("UserInput").value = '';
}

//Reloads game
function restartGame() {
  location.reload();
}

//Detects "Enter" keypress
document.onkeydown = function() {
  if (window.event.keyCode == '13') {
    checkInput();
  }
}

startGame();

console.log(gLetters);
