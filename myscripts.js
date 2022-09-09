// Test Function Definition
function testFunction(e){
console.dir(e.dataset.target);
console.dir(e)
}
// Global Variables
let playerScore = 0;
let computerScore = 0;
const user = 1;
const computer = 0;
const tie = 2;
let winner = 2;

// Player Buttons
const buttons = document.querySelectorAll('button');
console.dir(buttons);

// Disable Buttons
function disableButtons(){
    buttons.forEach(element => {
        element.disabled = true;
    });
}
// Enable Buttons
function enableButtons(){
    buttons.forEach(element => {
        element.disabled = false;
    });
}

// Generate random number for computer
function computerPlay() {
    const maximum = 3;
    const minimum = 1;

 return Math.floor(Math.random()*(maximum-minimum+1))+minimum;
}

// Round Play

function roundPlay(player){
    let computerInput = computerPlay();

            if(player == computerInput){
                winner = tie;
                playerScore++;
                computerScore++;
            }else if(player == 3 && computerInput == 1){
                winner = computer;
                computerScore++;
            }else if(player == 1 && computerInput == 2){
                winner = computer;
                computerScore++;
            }else if(player == 2 && computerInput == 3){
                winner = computer;
                computerScore++;
            }else if(player == 0){
                winner = computer;
                computerScore++;
            }else{
                winner = user;
                playerScore++;
            }
           
            if(playerScore >= 5 || computerScore >= 5){   

                disableButtons();       
                if(playerScore >= 5){
                    document.getElementById("winner").innerHTML = `You won ${playerScore}`;
                    console.log("You WON!"+playerScore);
                }else{
                    console.log("Computer WON!"+computerScore);
                    document.getElementById("winner").innerHTML = `You won ${computerScore}`;
                    
                }

            }else{
                document.getElementById("score").innerHTML = `PLAYER ${playerScore} VS COMPUTER ${computerScore}`;
                console.log(`PLAYER ${playerScore} VS COMPUTER ${computerScore}`);
                console.dir(document.getElementById("score").innerHTML);
            }
}


buttons.forEach(element => {
    element.addEventListener('click',function(){
            roundPlay(element.dataset.target);
    })
});

