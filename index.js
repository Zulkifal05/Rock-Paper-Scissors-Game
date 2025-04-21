let compScore = 0;
let userScore = 0;
const buttons = document.querySelectorAll(".options")
const msg = document.querySelector("#msg");
const resetBtn = document.querySelector("#reset");

//For each one of the buttons
buttons.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        Gameplay(userChoice);
    })
})

//Function for Computer generated choice
function ComputerChoice() {
    let choices = ["rock","paper","seassor"];
    let index = Math.floor(Math.random() * 3);
    return choices[index]
}

//Function for updating & displaying score
function ScoreDisplay(userWon) {
    if (userWon) {
        userScore++;
        document.querySelector("#user").innerText = userScore;
    }else {
        compScore++;
        document.querySelector("#comp").innerText = compScore;
    }
}

//Main gameplay function 
function Gameplay(userChoice) {
    let compChoice = ComputerChoice();
    if (compChoice === userChoice) {
        msg.innerText = "Game Drawn ( Play Next Move! )";
    }
    else {
        let userWon = true;
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                msg.innerText = `You lost : Computer Choice ${compChoice} ( Play Next Move! )`;
                userWon = false;
                ScoreDisplay(userWon);
            }
            else if (compChoice === "seassor") {
                msg.innerText = `You Won : Computer Choice ${compChoice} ( Play Next Move! )`;
                userWon = true;
                ScoreDisplay(userWon);
            }
        }
        else if (userChoice === "paper") {
            if (compChoice === "rock") {
                msg.innerText = `You Won : Computer Choice ${compChoice} ( Play Next Move! )`;
                userWon = true;
                ScoreDisplay(userWon);
            }
            else if (compChoice === "seassor") {
                msg.innerText = `You Lost : Computer Choice ${compChoice} ( Play Next Move! )`;
                userWon = false;
                ScoreDisplay(userWon);
            }
        }
        else if (userChoice === "seassor") {
            if (compChoice === "rock") {
                msg.innerText = `You Lost : Computer Choice ${compChoice} ( Play Next Move! )`;
                userWon = false;
                ScoreDisplay(userWon);
            }
            else if (compChoice === "paper") {
                msg.innerText = `You Won : Computer Choice ${compChoice} ( Play Next Move! )`;
                userWon = true;
                ScoreDisplay(userWon);
            }
        }
    }
}

//Reset Button
resetBtn.addEventListener("click",() => {
    compScore = 0;
    userScore = 0;
    document.querySelector("#user").innerText = userScore;
    document.querySelector("#comp").innerText = compScore;
    msg.innerText = "Play Your Move!";
});

