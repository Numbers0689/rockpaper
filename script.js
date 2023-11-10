
function getComputerChoice()
{
    switch(Math.floor(Math.random() * 3))
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

let playerSelection = prompt("Rock paper scissors: ");
let computerSelection = getComputerChoice();
let cscore = 0;
let pscore = 0;

function playRound(computerSelection, playerSelection) 
{
    let c = computerSelection.toLowerCase();
    let p = playerSelection.toLowerCase();
    if (c === p)
    {
        return "Its a draw";
    }
    else if (c === "rock" && p === "paper")
    {
        pscore ++;
        return "You win! paper beats rock.";
    }
    else if (c === "rock" && p === "scissors")
    {
        cscore ++;
        return "You lose! rock beats scissors.";
    }
    else if (c === "paper" && p === "scissors")
    {
        pscore ++;
        return "You win! scissors beats paper.";
    }
    else if (c === "paper" && p === "rock")
    {
        cscore ++;
        return "You lose! paper beats rock.";
    }
    else if (c === "scissors" && p === "paper")
    {
        cscore ++;
        return "You lose! scissors beats paper.";
    }
    else if (c === "scissors" && p === "rock")
    {
        pscore ++;
        return "You win! rock beats scissors.";
    }
}

function game()
{
    for(let i = 0; i < 5; i++)
    {
        console.log(playRound(computerSelection, playerSelection));

    }
}

console.log(`${playerSelection} vs ${computerSelection}`);
