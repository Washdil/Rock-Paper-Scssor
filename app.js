const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore')

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

choices.forEach(choice => {
     choice.addEventListener('click', startGame)
});

function startGame(e) {
     const playerChoice = e.target.dataset.choice;
     const computerPick = getcomputerPick();
     const gameResult = getWinner(playerChoice, computerPick);
     showResult(playerChoice, computerPick, gameResult)
     
    
     gamesPlayed++;
     
     


     if(gamesPlayed >= 5) {
      if(playerScore > computerScore) {
        result.textContent = 'You won the match';
      } else if(computerScore > playerScore) {
        result.textContent= "Computer Won the match";
      }
      else {
        result.textContent = "It's a tie";
      }

      
      updateGame();
      reset();
     }
}

function reset() {
  playerScore,computerScore,gamesPlayed = 0;
}

function updateGame() {
  playerScoreSpan.innerHTML = `${playerScore++}`;
  computerScoreSpan.innerHTML = `${computerScore++}`
}

function getcomputerPick() {
     const choices = ['rock' , 'paper', 'scissor'];
     const randomIndex = Math.floor(Math.random() * choices.length);
     return choices[randomIndex];
}
function getWinner(playerChoice, computerPick) {
     if (playerChoice === computerPick) {
       return "It's a tie";
     } else if (
       (playerChoice === "rock" && computerPick === "scissor") ||
       (playerChoice === "paper" && computerPick === "rock") ||
       (playerChoice === "scissor" && computerPick === "paper")
     ) {
       return "You Win";
     } else {
       return "Computer wins";
     }
   }
   
   function showResult(playerChoice, computerPick, gameResult) {
     result.innerHTML = `
       You chose: ${playerChoice} <br>
       Computer chose:${computerPick} <br>
       Result:${gameResult};
     `;
   }




