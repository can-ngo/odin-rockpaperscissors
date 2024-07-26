const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resetBtn = document.getElementById('reset-btn');
const yourScore = document.getElementById('human-score');
const compScore = document.getElementById('computer-score');
const roundLabel = document.getElementById('round-label');
const statusDiv = document.getElementById('status');

const choices = ['rock','paper','scissors']
let [humanScore, computerScore] = [0,0];
let humanChoice;
let round = 0;
roundLabel.innerText = round;

function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
}

rockBtn.addEventListener('click',(event)=>{
    playGame();
})

paperBtn.addEventListener('click',(event)=>{
    playGame();  
})

scissorsBtn.addEventListener('click',(event)=>{
    playGame();
})

resetBtn.addEventListener('click',()=>{
    round = 0;
    [humanScore, computerScore] = [0,0];
    yourScore.innerText = humanScore;
    compScore.innerText = computerScore;
    roundLabel.innerText = round;
    //Declare final result
    statusDiv.innerHTML = ``;
    rockBtn.removeAttribute('disabled');
    paperBtn.removeAttribute('disabled');
    scissorsBtn.removeAttribute('disabled');
})


function playGame () {
    humanChoice = event.target.value;
    let computerChoice = getComputerChoice();
    //Determine each round result
    if (humanChoice === computerChoice) {
        statusDiv.innerText = 'EVENS!!!';
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
                ||humanChoice === 'scissors' && computerChoice === 'rock'
                ||humanChoice === 'paper' && computerChoice === 'scissors') {
            statusDiv.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'
                ||humanChoice === 'scissors' && computerChoice === 'paper'
                ||humanChoice === 'paper' && computerChoice === 'rock') {
            statusDiv.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
    }
    //Update status of each round
    round++;
    yourScore.innerText = humanScore;
    compScore.innerText = computerScore;
    roundLabel.innerText = round;
    //Declare final result
    if (round >= 10){
        if (humanScore > computerScore) {
            statusDiv.innerHTML = `<h2>YOU WIN!</h2>`;
        } else if (humanScore < computerScore) {
            statusDiv.innerHTML = `<h2>COMPUTER WINS!!</h2>`
        } else {
            statusDiv.innerHTML = `<h2>UNBELIEVABLE DUE!!</h2>`
        }
        rockBtn.setAttribute('disabled','true');
        paperBtn.setAttribute('disabled','true');
        scissorsBtn.setAttribute('disabled','true');
    }
}