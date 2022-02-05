//function that randomly returns rock/paper/scissor
function computerPlay(num)
{
    if(num === 1)
    {
        return 'Rock';
    }
    else if(num === 2)
    {
        return 'Paper';
    }
    else if(num === 3)
    {
        return 'Scissors';
    }
    
}

let playerWinCount = 0;
let computerWinCount = 0;

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        return 'game tied';
    }
    else if( playerSelection.toLowerCase() === 'rock')
    {
        if(computerSelection.toLowerCase() === 'scissors')
        {
            playerWinCount++;
            return 'You Win! Rock beats Scissors';
        }
        else
        {
            computerWinCount++;
            return 'You Lose! Paper beats Rock';
        }
    }
    else if( playerSelection.toLowerCase()=== 'paper')
    {
        if(computerSelection.toLowerCase() === 'rock')
        {
            playerWinCount++;
            return 'You Win! Paper beats Rock';
        }
        else
        {
            computerWinCount++;
            return 'You Lose! Scissor beats Paper';
        }
    }
    else if( playerSelection.toLowerCase()=== 'scissors')
    {
        if(computerSelection.toLowerCase() === 'paper')
        {
            playerWinCount++;
            return 'You Win! Scissor beats Paper';
        }
        else
        {
            computerWinCount++;
            return 'You Lose! Rock beats Scissors';
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let randomNum = Math.floor(Math.random() * 3 + 1);
        const computerSelection = computerPlay(randomNum);
        //console.log(button.textContent);
        const playerSelection = button.textContent;
        const div = document.querySelector('.output');
        div.textContent = playRound(playerSelection, computerSelection);
    });
});



