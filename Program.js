var gRandomNumber = Math.floor(Math.random() * words.length);
var gAnswer = words[gRandomNumber]; //The word you have to guess
var gLetter = gAnswer.split(""); //The first letter of the word you have to guess
var gInput = document.getElementById('UserInput').value;
var gSubmits = 5;
var gDelay = 100;

//Now you only have to type "_" instead of "document.getElementById"
function _(x) {
    return document.getElementById(x);
}

//Detects "Enter" keypress
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        CheckInput();
    }
}

function StartGame() {
    _("Guess").innerHTML = gSubmits + " attempts left.";
    _("1_1").innerHTML = gLetter[0];
    var inputLetter = gInput.split("");
    if (gLetter[0] == inputLetter[0]) {
        _("Mssg").innerHTML = "You've got the first letter right!";
    }
    if (gLetter[1] == inputLetter[1]) {
        _("Mssg").innerHTML = "You've got the second letter right!";
    }
}

//Reloads game
function RestartGame() {
    location.reload();
}

function CheckInput() {
    var check = _("UserInput").value;
    console.log(check);
    gSubmits--;
    if (check.length !== 5) {
        alert("Please enter at least 5 characters!");
    } else {
        _("Guess").innerHTML = gSubmits + " attempts left.";
        if (gSubmits < 1) {
            _("container").innerHTML = "<h1 class='GameOver'>GAME OVER!</h1>";
            _("msgBox").innerHTML = "";
            _("smallMsg").innerHTML = "";
            $("button").toggleClass("invisible");
        }
    }
}

function Tiles() {
    var Row1 = _("row1");
    var Row2 = _("row2");
    var Row3 = _("row3");
    var Row4 = _("row4");
    var Row5 = _("row5");

    var Row1Content = Row1._("1_1").value;
    console.log(Row1Content);
}

StartGame();

console.log(gAnswer); //The word you have to guess
console.log(gLetter[0]); //The first letter of the word you have to guess
console.log(gLetter[1]); //The second letter of the word you have to guess
console.log(gLetter[2]); //The third letter of the word you have to guess
console.log(gLetter[3]); //The fourth letter of the word you have to guess
console.log(gLetter[4]); //The fifth letter of the word you have to guess
console.log(gInput);