const plays = ["rock", "paper", "scissors"];
let winner;

function computerPlay(){
  const randomIndex = Math.floor(plays.length * Math.random());
  return plays[randomIndex];
};

function playRound(roundNumber){
  const playerSelection = prompt(`Do you want to play 'Rock', 'Paper', or 'Scissors'?        Round ${roundNumber} of 5`)
  const computerSelection = computerPlay();
  if(!plays.includes(playerSelection.toLowerCase())){
    return "That selection is not valid, please play again."
  }  
  console.log(`You played ${playerSelection} and computer played ${computerSelection}`);
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
    return "This round is a tie.  Try again!"
  }
  else {
    switch(`${playerSelection.toLowerCase()} vs ${computerSelection.toLowerCase()}`){
      case "rock vs paper":
        winner = "computer";
        break;
      case "rock vs scissors":
        winner = "player";
        break;
      case "paper vs rock":
        winner = "player";
        break;
      case "paper vs scissors":
        winner = "computer";
        break;
      case "scissors vs paper":
        winner = "player";
        break;
      case "scissors vs rock":
        winner = "computer";
    }
    if(winner === "player"){
      alert(`You win! ${playerSelection} beats ${computerSelection}.`)
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
    }
    else {
      alert(`You lose! ${computerSelection} beats ${playerSelection}.`)
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  for(let i=0; i<5; i++){
    playRound(i+1);
    if(winner === "player"){
      winner = null;
      playerScore ++;
    }
    if(winner === "computer"){
      winner = null;
      computerScore ++;
    }
    console.log(`Score is ${playerScore} to ${computerScore}`)   
  }
  if(playerScore === computerScore){
    console.log("It's a tie!")
    document.getElementById("result").innerHTML = (
      `<p>Score is ${playerScore} to ${computerScore}.  
      It's a draw! Better luck next time.</p>
      <button onClick="game()">Play again?</button>`
    )
  }
  else if(playerScore > computerScore){
    console.log("You win!")
    document.getElementById("result").innerHTML = (
      `<p>Score is ${playerScore} to ${computerScore}.  
      You win!</p>
      <button onClick="game()">Play again?</button>`
    )
  }
  else {
    console.log("Better luck next time");
    document.getElementById("result").innerHTML = (
      `<p>Score is ${playerScore} to ${computerScore}.  
      You lose, better luck next time!</p>
      <button onClick="game()">Play again?</button>`
    )
  }
}

game()