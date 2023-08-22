function getComputerChoice() {
     let computerPick = Math.round(Math.random() * 10);
     
     if(computerPick <= 3 ) {
          return 'Rock';
     } else if(computerPick > 3 && computerPick <= 6) {
          return 'Paper';
     } else if(computerPick > 6 && computerPick <= 9) {
          return 'Scissor';
     } 
}
 

function playRound(playerMove , ComputerMove) {
     if(playerMove === 'Rock' && ComputerMove === 'Scissor') {
          return `You win ${playerMove} beats ${ComputerMove}`;
     }
     else if (playerMove === 'Paper' && ComputerMove === 'Rock') {
          return `You win ${playerMove} beats ${ComputerMove} `;
     }

     else if (playerMove === 'Scissor' && ComputerMove === 'Paper') {
          return `You win ${playerMove} beats ${ComputerMove}`;
     }
      else {
          return ` You lose ${playerMove} loses to ${ComputerMove}`;
      }
 
}

let playerMove = prompt('what is your move ');
let ComputerMove = getComputerChoice();
console.log(playRound(playerMove , ComputerMove));