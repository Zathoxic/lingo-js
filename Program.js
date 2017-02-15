var gRandomNumber = Math.floor(Math.random() * words.length);
var gAnswer = words[gRandomNumber]; //The word you have to guess
var gLetters = gAnswer.split(""); //The first letter of the word you have to guess
var gSubmits = 5;
var gDelay = 100;
var gRows = 1;
var gPos = 1;
var gStartingPos = 1;
var gAttempts = 1;
var gClicks = document.getElementsByTagName('input' [0]);

//Detects "Enter" keypress
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        checkInput();
    }
}


function startGame() {
    var userInput = document.getElementById('UserInput').value;
    document.getElementById("Attempts").innerHTML = gSubmits + " attempts left.";
    document.getElementById("1_1").innerHTML = gLetters[0];
    var inputLetters = userInput.split("");
}

//Reloads game
function restartGame() {
    location.reload();
}

function checkInput() {
    moveDown();

    var checkInput = document.getElementById("UserInput").value;
    var inputArray = checkInput.split("");
    for (i = 0; i < inputArray.length; i++) {
        //good
        if (inputArray[i] == gLetters[i]) {

            //Contains
        } else if (inputArray[i] !== gLetters[i]) {

            //Wrong
        } else {

        }
    }
    if (checkInput.length == 5) {
        gSubmits--;
    }
    if (checkInput.length !== 5) {
        alert("Please enter at 5 characters!");
    } else {
        document.getElementById("Attempts").innerHTML = gSubmits + " attempts left.";
        if (document.getElementById("UserInput").value == gAnswer) {
            document.getElementById("container").innerHTML = "<h1 class='GameOver'>Congratulations! You won</h1>";
            document.getElementById("msgBox").innerHTML = "";
            document.getElementById("smallMsg").innerHTML = "";
            $("button").toggleClass("invisible");
        }
    }
    if (gSubmits < 1) {
        document.getElementById("container").innerHTML = "<h1 class='GameOver'>BIEEEMMMM you're ded!</h1>";
        document.getElementById("msgBox").innerHTML = "";
        document.getElementById("smallMsg").innerHTML = "";
        $("button").toggleClass("invisible");
    }
}

function moveDown() {
    var userInput = document.getElementById('UserInput').value;
    var inputArray = userInput.split("");
    var curRow = document.getElementById("row" + gAttempts);
    console.log("Checking gAttempts: " + gAttempts);
    console.log("Checking userInput: " + userInput);
    console.log("Checking inputArray: " + inputArray);
    if (gAttempts <= 4 && checkInput.length !== 5) {
        //ROW 1
        gClicks.onclick = gAttempts++;
        gClicks.onclick = gRows++;
        var curRow = document.getElementById("row" + gAttempts);
        document.getElementById(gRows + "_1").innerHTML = gLetters[0];
    }
}

startGame();


console.log("Checking gAnswer: " + gAnswer);
console.log("Checking gLetters: " + gLetters);