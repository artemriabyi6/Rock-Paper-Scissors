const choices = ['rock', 'paper', 'scissors']
const displayResult = document.getElementById('result')
const displayComputer = document.getElementById('computerChoice')
const displayPlayer = document.getElementById('playerChoice')
const displayPlayerScore = document.getElementById('playerScore')
const displayComputerScore = document.getElementById('computerScore')

let playerScore = 0
let computerScore = 0


function playGame(playerChoise){
    let computerChoise = choices[Math.floor(Math.random() * 3)]

    displayComputer.textContent = `Computer: ${computerChoise}`
    displayPlayer.textContent = `Player: ${playerChoise}`
   

    switch(playerChoise) {
        case 'rock': computerChoise === 'paper' ?
                     displayResult.textContent = `You lose!`:
                     displayResult.textContent = `You win!`
                     break;
        case 'paper': computerChoise === 'scissors' ?
                      displayResult.textContent = 'You lose!':
                      displayResult.textContent = 'You win!'
                      break;
        case 'scissors': computerChoise === 'rock' ?
                         displayResult.textContent = 'You lose!':
                         displayResult.textContent = 'You win!'
    }

    if(playerChoise === computerChoise) {
        displayResult.textContent = `It's a tie!`
    }

    if(displayResult.textContent === 'You win!') {
        displayPlayer.style.color = 'lightgreen'
        displayComputer.style.color = 'red'
        displayResult.style.color = 'lightgreen'
        playerScore++
    } else if (playerChoise === computerChoise){
        displayPlayer.style.color = 'black'
        displayComputer.style.color = 'black'
        displayResult.style.color = 'blue'

    } else {
        displayPlayer.style.color = 'lightgreen'
        displayComputer.style.color = 'red'
        displayResult.style.color = 'red'
        computerScore++
    }

    displayComputerScore.textContent = `Computer Score: ${computerScore}`
    displayPlayerScore.textContent = `Player Score: ${playerScore}`
}