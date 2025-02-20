function getComputerChoice(){
    choice = Math.floor(Math.random()*3)
    switch (choice){
        case 0: 
        return "rock"
        break;
        case 1:
        return "paper"
        break;
        case 2:
        return "scissors"

    }
}


function getHumanChoice(){
    let choice = prompt("Please enter rock paper or scissors: ")
    let choice2 = choice.toLowerCase();
    return choice2
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (i = 1; i <=5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    }
function playRound(humanChoice, computerChoice){
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")||
        (humanChoice === "paper" && computerChoice === "rock")){
            humanScore++;
            console.log("You Win this round! " + humanChoice + " beats " + computerChoice  + ". Your Score: " + humanScore + "\n Computer Score: " + computerScore);
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")||
        (computerChoice === "paper" && humanChoice === "rock")) {
            computerScore++;
            console.log("You lose this round! " + computerChoice + " beats " + humanChoice + ". Your Score: " + humanScore + "\n Computer Score: " + computerScore)
        } else if (humanChoice === computerChoice){
            console.log("You tied.")
        } else {
            console.log("Please enter valid choice.")
        }

}
if (humanScore > computerScore){
    console.log("YOU WIN THE GAME!")
} else{
    console.log("YOU LOSE THE GAME! Please refresh to try again.")
}
}
    
playGame();