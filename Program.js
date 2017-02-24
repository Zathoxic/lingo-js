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
    var cols = document.getElementById("radio").length;
    console.log(cols);
    // copy input to empty row
    var checkInput = document.getElementById("UserInput").value;
    var inputArray = checkInput.split("");
    for (i = 0; i < 5; i++) {
        var letterNum = gAttempts.toString() + "_" + i;

        //good
        if (inputArray[i] == gLetters[i]) {
            document.getElementById(letterNum).style.backgroundColor = "red";
            //Contains
        } else if (inputArray.indexOf(gLetters[i]) > -1) {
            document.getElementById(letterNum).style.backgroundColor = "yellow";
            //Wrong
        } else {

        }
    }
    if (checkInput.length == 5) {
        CopyInputToEmptyRow();
        gSubmits--;
        document.getElementById("Attempts").innerHTML = gSubmits + " attempts left.";
        if (document.getElementById("UserInput").value == gAnswer) {
            document.getElementById("Game").innerHTML = "<h1 class='YouWon'>You won! <br/>" + gAnswer + " was correct!</h1>";
            document.getElementById("msgBox").innerHTML = "";
            document.getElementById("smallMsg").innerHTML = "";
            $("button").toggleClass("invisible");
        }
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

    clicks.onclick = gRows++;
    if (gAttempts <= 4) {
        //ROW 1
        clicks.onclick = gAttempts++;
        var curRow = document.getElementById("row" + gRows);
        var displayLetter1 = document.getElementById(gRows + "_0").innerHTML = inputArray[0];
        var displayLetter2 = document.getElementById(gRows + "_1").innerHTML = inputArray[1];
        var displayLetter3 = document.getElementById(gRows + "_2").innerHTML = inputArray[2];
        var displayLetter4 = document.getElementById(gRows + "_3").innerHTML = inputArray[3];
        var displayLetter5 = document.getElementById(gRows + "_4").innerHTML = inputArray[4];
    }

    document.getElementById("UserInput").value = '';
}

//Reloads game
function restartGame() {
    location.reload();
}

//Detects "Enter" keypress
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        checkInput();
    }
}

startGame();
