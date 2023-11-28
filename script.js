
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

let playerSelection;
let computerSelection;
let cscore = 0;
let pscore = 0;

function playRound(computerSelection, playerSelection) 
{
    let c = computerSelection.toLowerCase();
    let p = playerSelection.toLowerCase();

    if (c === "rock" && p === "paper")
    {
        pscore ++;
    }
    else if (c === "rock" && p === "scissors")
    {
        cscore ++;
    }
    else if (c === "paper" && p === "scissors")
    {
        pscore ++;
    }
    else if (c === "paper" && p === "rock")
    {
        cscore ++;
    }
    else if (c === "scissors" && p === "paper")
    {
        cscore ++;
    }
    else if (c === "scissors" && p === "rock")
    {
        pscore ++;
    }
}

function clickFunction() {

    if(cscore < 5 && pscore < 5)
    {
        computerSelection = getComputerChoice();

        playRound(computerSelection, playerSelection);

        player.textContent = playerSelection;
        comp.textContent = computerSelection;
    
        score.textContent = `COMPUTER: ${cscore}  YOU: ${pscore}`;
        if (cscore === 5)
        {
            resultDiv.textContent = "The computer wins!";
        }
        else if (pscore === 5)
        {
            resultDiv.textContent = "You win!";
        }
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultDiv = document.querySelector('#result');
const comp = document.querySelector('#computerSelect');
const player = document.querySelector("#playerSelect");
const score = document.querySelector('#score');


rockBtn.addEventListener('click', () => {

    playerSelection = 'Rock';
    clickFunction();
});


paperBtn.addEventListener('click', () => {
  
    playerSelection = 'Paper';
    clickFunction();
});


scissorsBtn.addEventListener('click', () => {
  
    playerSelection = 'Scissors';
    clickFunction();
});

