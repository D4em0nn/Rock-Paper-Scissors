
const buttons = document.querySelectorAll('.b');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
let win = document.querySelector('.win');
const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click',() => window.location.reload());

let compInc = 0;
let playerInc = 0

function computerPlay()
{
    let num= Math.floor(Math.random() * 3 + 1);
    if(num === 1)
    {
        return 'rock';
    }
    else if(num === 2)
    {
        return 'paper';
    }
    else if(num === 3)
    {
        return 'scissors';
    }
}

function pWin()
{
    player.textContent = `Player win count: ${++playerInc}`;
    if(playerInc === 5)
    {
        result(1); // 1 tells that player wins
    }
}

function cWin()
{
    computer.textContent = `Computer win count: ${++compInc}`;
    if(compInc === 5)
    {
        result(0); // 0 tells that comp wins
    }
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection)
    {
        player.textContent = `Player win count: ${playerInc}`;
        computer.textContent = `Computer win count: ${compInc}`;
        return 'game tied';
    }
    else if( playerSelection === 'rock')
    {
        if(computerSelection === 'scissors')
        {
            pWin();
            return 'You Win! Rock beats Scissors';
        }
        else
        {
            cWin();
            return 'You Lose! Paper beats Rock';
        }
    }
    else if( playerSelection === 'paper')
    {
        if(computerSelection === 'rock')
        {
            pWin();
            return 'You Win! Paper beats Rock';
        }
        else
        {
            cWin();
            return 'You Lose! Scissor beats Paper';
        }
    }
    else if( playerSelection === 'scissors')
    {
        if(computerSelection === 'paper')
        {
            pWin();
            return 'You Win! Scissor beats Paper';
        }
        else
        {
            cWin();
            return 'You Lose! Rock beats Scissors';
        }
    }
}

let playerSelection;
buttons.forEach((button) => {
    button.addEventListener('click', getSelection);
});

function getSelection(button)
{
    playerSelection = button.target.textContent.toLowerCase();
    console.log(playerSelection);
    let computerSelection = computerPlay();
    win.textContent = playRound(playerSelection, computerSelection);
}

function result(num)
{
    const result = document.querySelector('.result');
    if(num === 1)
    {
        result.textContent = 'You Win';
    }
    if(num === 0)
    {
        result.textContent = 'Computer Wins';
    }
    
    buttons.forEach((button) => {
        button.removeEventListener('click', getSelection); 
    });
}
     



