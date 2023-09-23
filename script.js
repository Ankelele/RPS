let options;
let randomIndex;
let computerSelection;
let a;
let userSelection;
let Uwins = 0;
let Cwins = 0;
function getComputerChoice() {
    options = ["R", "P", "S"];
    randomIndex = Math.floor(Math.random() * options.length);
    computerSelection = options[randomIndex];
    console.log("comp" + " " + computerSelection);
    document.getElementById("Computerselection").innerHTML = computerSelection;
    return computerSelection, randomIndex;

}
console.log(
    "fdsf"
);

function selectRock() {
    userSelection = "R";
    getComputerChoice();
    console.log(userSelection);
    console.log(checkWinner(userSelection, computerSelection));
    document.getElementById("Userselection").innerHTML = "Rock";
    return userSelection;
}

let RockButton = document.getElementById("Rock");
RockButton.addEventListener('click', selectRock);

function selectPaper() {
    userSelection = "P";
    getComputerChoice();
    console.log(userSelection);
    console.log(checkWinner(userSelection, computerSelection));
    document.getElementById("Userselection").innerHTML = "Paper";
    return userSelection;
}

let PaperButton = document.getElementById("Paper");
PaperButton.addEventListener('click', selectPaper);

function selectScissors() {
    userSelection = "S";
    getComputerChoice();
    console.log(userSelection);
    console.log(checkWinner(userSelection, computerSelection));
    document.getElementById("Userselection").innerHTML = "Scissors";
    return userSelection;
}

let ScissorsButton = document.getElementById("Scissors");
ScissorsButton.addEventListener('click', selectScissors);

function checkWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {

        a = "Tie!";
        if (Cwins == 5 || Uwins == 5) {
            window.location.reload()
        }
        return a;
    } else if (userSelection === "R" && computerSelection === "S" ||
        userSelection === "P" && computerSelection === "R" ||
        userSelection === "S" && computerSelection === "P") {

        a = "You win!";
        Uwins++;
        document.getElementById("Uwins").innerHTML = Uwins;
        c = c + 1;
        if (Cwins == 5 || Uwins == 5) {
            window.location.reload()
        }
        return a, Uwins, c;
    } else {

        a = "Computer wins!";
        Cwins++;
        document.getElementById("Cwins").innerHTML = Cwins;

        if (Cwins == 5 || Uwins == 5) {
            window.location.reload()
        }
        return a, Cwins, c;
    }

}





