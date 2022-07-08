function computerPlay() {
    const maximum = 3;
    const minimum = 1;

 return Math.floor(Math.random()*(maximum-minimum+1))+minimum;
}

function getUserInput(){
    let Userinput;
    Userinput = prompt();
    if(Userinput != null){
        Userinput = Userinput.toUpperCase();
    }
    return Userinput;
}
function computerSelection(computerInput){
    let stringOutput;
    if(computerInput != 0 && computerInput <= 3){
        switch (computerInput) {
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
console.log(getUserInput());
console.log(computerSelection(computerPlay()));