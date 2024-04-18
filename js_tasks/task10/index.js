const getUserChoice=(userInput)=>{
    userInput = userInput.toLowerCase();
    if((userInput=='rock')||(userInput=='paper')||(userInput=='scissors')||(userInput=='bomb')){
        return userInput;
    }
    else {console.log('error: please enter rock paper scissors');}
}
//console.log(getUserChoice('rock'));
const getComputerChoice=()=>{
    let choice=Math.floor(Math.random() *3);
    if (choice==0){return'rock';}
    else if(choice==1){return 'paper';}
    else {return 'scissors';}
}
//console.log(getComputerChoice());

const determineWinner=(userChoice,computerChoice)=>{
    if(userChoice=='bomb'){console.log("you won ");}
    else if(userChoice==computerChoice){console.log("the game is a tie ");}
    else if(userChoice=='rock'){
        if(computerChoice=='paper'){console.log("you lost ");}
        else {console.log("you won ");}
    }
    else if(userChoice=='paper'){
        if(computerChoice=='scissors'){console.log("you lost ");}
        else {console.log("you won ");}
    }
    else if(userChoice=='scissors'){
        if(computerChoice=='rock'){console.log("you lost ");}
        else {console.log("you won ");}
    }
}
//If a user types 'bomb' as their choice, they win, no matter what.
const playGame=()=>{
    let userChoice=getUserChoice('rock');
    let computerChoice=getComputerChoice();
determineWinner(userChoice,computerChoice);
}
console.log(playGame());
