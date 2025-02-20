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
console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Please enter rock paper or scissors: ")
    let choice2 = choice.toLowerCase();
    return choice2
}
console.log(getHumanChoice());