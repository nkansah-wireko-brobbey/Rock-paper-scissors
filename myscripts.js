// Generate random number for computer
function computerPlay() {
    const maximum = 3;
    const minimum = 1;

 return Math.floor(Math.random()*(maximum-minimum+1))+minimum;
}

// Get inputs from user
function getUserInput(){
    let Userinput;
    Userinput = prompt();
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
    winner = 2;
            if(userInput == computerInput){
                winner = tie;
            }else if(userInput == 3 && computerInput == 1){
                winner = computer;
            }else if(userInput == 1 && computerInput == 2){
                winner = computer;
            }else if(userInput == 2 && computerInput == 3){
                winner = computer;
            }else if(userInput == 0){
                winner = computer;
            }else{
                winner = user;
            }
           

    return winner;
}

// Display string 
function winnerDisplay(_code){
    if (_code == 1){
        return "You Won";
    }else if(_code == 0){
        return "Computer Won";
    }else{
        return "The game was a tie";
    }
}
function playGame(){    
    let counter = 0;
    let score = 0;
    let computerPlayer = 0;
    let userPlayer = 0;
    while(true){
    
        score = playRound(optionToNumber(getUserInput()), computerPlay())
    
       
            if(score == 1){
                userPlayer++;
            }else if(score == 0){
                computerPlayer++;
            }
        
        console.log(winnerDisplay(score));
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
playGame();