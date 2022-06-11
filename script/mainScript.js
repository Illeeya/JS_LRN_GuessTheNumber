"use strict";
// CONST
const BODY = document.body;
//
// LET
let score = 20;
let highScore = 0;
let randomNumber = getRandomInt(20);
//
// FUNCTIONS
//
function divify(gridArea, element) {
    const DIV = document.createElement(`div`);
    DIV.style.gridArea = gridArea;
    DIV.appendChild(element);
    BODY.appendChild(DIV);
}
//
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
//
function again() {
    INPUT.value = "";
    score = 20;
    P_SCORE.textContent = `Score: ${score}`;
    P_HINT.textContent = "Start guessing...";
    randomNumber = getRandomInt(20);
}
//
function check() {
    const INPUT_VALUE = Number(INPUT.value);
    if (!INPUT_VALUE || INPUT_VALUE > 20 || INPUT_VALUE < 1) {
        P_HINT.textContent =
            "You need to provide number between 1 and 20 to check!";
        return;
    }
    if (!Number.isInteger(INPUT_VALUE)) {
        P_HINT.textContent = "Number must be integer!";
        INPUT.value = "";
        return;
    }
    if (INPUT_VALUE === randomNumber) {
        P_HINT.textContent = "CORRECT!";
        if (highScore < score) {
            highScore = score;
            P_HIGHSCORE.textContent = `Highscore: ${highScore}`;
        }
        alert("Congratulations! Click ok to try again!");
        again();
        return;
    }
    if (INPUT_VALUE !== randomNumber) {
        if (INPUT_VALUE < randomNumber) P_HINT.textContent = "Higher";
        if (INPUT_VALUE > randomNumber) P_HINT.textContent = "Lower";
        score--;
        P_SCORE.textContent = `Score: ${score}`;
        INPUT.value = "";
        return;
    }
    if (score == 0) {
        P_HINT.textContent = "No more tries!";
        alert("No more tries. Click ok to try again!");
        again();
        return;
    }
}

// DOM ELEMENTS
// Buttons
const AGAIN_BUTTON = document.createElement(`button`);
AGAIN_BUTTON.textContent = "Again!";
AGAIN_BUTTON.onclick = again;
const CHECK_BUTTON = document.createElement(`button`);
CHECK_BUTTON.textContent = "Check!";
CHECK_BUTTON.onclick = check;
// Text
const P_BETWEEN = document.createElement(`p`);
P_BETWEEN.textContent = "(Integer between 1 and 20)";
//
const P_GUESS = document.createElement(`p`);
P_GUESS.textContent = "Guess My Number!";
P_GUESS.style.fontSize = "2em";
//
const HR = document.createElement(`hr`);
HR.style.border = "1px solid aliceblue";
HR.style.width = "80%";
//
const P_HINT = document.createElement(`p`);
P_HINT.textContent = "Start guessing...";
//
const P_SCORE = document.createElement(`p`);
P_SCORE.textContent = `Score: ${score}`;
//
const P_HIGHSCORE = document.createElement(`p`);
P_HIGHSCORE.textContent = `Highscore: ${highScore}`;
// Input
const INPUT = document.createElement(`input`);
INPUT.type = "number";
INPUT.step = "1";
INPUT.placeholder = "1-20";
//
// ELEMENTS APPEND
// R1
divify("1/1/2/2", AGAIN_BUTTON);
divify("1/2/2/3", P_BETWEEN);
// R2
divify("2/1/3/3", P_GUESS);
// R3
divify("3/1/4/3", HR);
// R4
divify("4/1/5/2", INPUT);
divify("4/2/5/3", P_HINT);
// R5
divify("5/1/7/2", CHECK_BUTTON);
divify("5/2/6/3", P_SCORE);
// R6
divify("6/2/7/3", P_HIGHSCORE);
