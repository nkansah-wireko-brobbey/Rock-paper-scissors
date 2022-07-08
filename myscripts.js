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

console.log(getUserInput());