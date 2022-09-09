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
                    document.querySelectorAll("p.winner").innerHTML = `You won ${playerScore}`;
                    console.log("You WON!"+playerScore);
                }else{
                    console.log("Computer WON!"+computerScore);
                    document.querySelectorAll("p.winner").innerHTML = `You won ${computerScore}`;
                }

            }else{
                document.querySelectorAll("").innerHTML = `PLAYER ${playerScore} VS COMPUTER ${computerScore}`;
            }
}


buttons.forEach(element => {
    element.addEventListener('click',function(){
            roundPlay(element.dataset.target);
    })
});


// Get inputs from user
function getUserInput(){
    let Userinput;
    // Userinput = 
    if(Userinput != null){
        Userinput = Userinput.toUpperCase();
    }
    return Userinput;
}

// Convert option entry to number
function optionToNumber(input){
    let numberOutput;
    if(input != null){
        switch (input) {
            case "ROCK":
                numberOutput = 1;
                break;
            case "PAPER":
                numberOutput = 2;
                break;
            case "SCISSORS":
                numberOutput = 3;
                break;
            default:
                numberOutput = 0;
                break;
        }
    }
    return numberOutput;
}

// Change number value to option
function numberToOption(input){
    let stringOutput;
    if(input != 0 && input <= 3){
        switch (input) {
            case 1:
                stringOutput = "ROCK";
                break;
            case 2:
                stringOutput = "PAPER";
                break;
            case 3:
                stringOutput = "SCISSORS";
                break;
            default:
                stringOutput = "NULL";
                break;
        }
    }
    return stringOutput;
}

// Declare winner of a round
function playRound(userInput, computerInput){
    const user = 1;
    const computer = 0;
    const tie = 2;
    let winner = 2;
            if(userInput == computerInput){
                winner = tie;
                playerScore++;
                computerScore++;
            }else if(userInput == 3 && computerInput == 1){
                winner = computer;
                computerScore++;
            }else if(userInput == 1 && computerInput == 2){
                winner = computer;
                computerScore++;
            }else if(userInput == 2 && computerInput == 3){
                winner = computer;
                computerScore++;
            }else if(userInput == 0){
                winner = computer;
                computerScore++;
            }else{
                winner = user;
                playerScore++;
            }
           
            if(playerScore || computerScore >= 5){`            `
                if(playerScore >= 5){
                    console.log("You WON!"+playerScore);
                }else{
                    console.log("Computer WON!"+computerScore);
                }

            }

    
}

// Display string 
function winnerDisplay(_code, userInput, computerInput){
    if (_code == 1){
        return `You WON, you selected ${userInput} against ${computerInput}`;
    }else if(_code == 0){
        return`You LOOSE, you selected ${userInput} against ${computerInput}`;
    }else{
        return "The game was a tie";
    }
}
function playGame(){     
    let counter = 0;
    let score = 0;
    let computerPlayer = 0;
    let userPlayer = 0;
    let userOption;
    let computerOption;
    while(true){
        userOption = optionToNumber(getUserInput());
        computerOption = computerPlay();
        score = playRound(userOption, computerOption);
    
       
            if(score == 1){`
            `
                userPlayer++;
            }else if(score == 0){
                computerPlayer++;
            }
        
        console.log(winnerDisplay(score, numberToOption(userOption), numberToOption(computerOption)));
        counter++;
        if(counter == 5){
            break;
        }
    
    }
    if(userPlayer > computerPlayer){
        console.log("You WON the game");
    }else if(userPlayer < computerPlayer){
        console.log("Computer WON this game, better luck next time!");
    }else{
        console.log("The game was a TIE");
    }
}
// playGame();