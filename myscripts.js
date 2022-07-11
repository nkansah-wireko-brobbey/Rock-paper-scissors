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

// Change computer generated value to string
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
            default:
                stringOutput = "SCISSORS";
                break;
        }
    }
    return stringOutput;
}
function selectWinner(userInput, computerInput){
    const user = 1;
    const computer = 0;
    const tie = 2;
    winner = 2;
            if(userInput == computerInput){
                winner = tie;
            }else if(userInput == 'SCISSORS' && computerInput == 'ROCK'){
                winner = computer;
            }else if(userInput == 'ROCK' && computerInput == 'PAPER'){
                winner = computer;
            }else{
                winner = user;
            }
    return winner;
}
console.log(getUserInput());
console.log(numberToOption(computerPlay()));
console.log(selectWinner(getUserInput,numberToOption(computerPlay())));