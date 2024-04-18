let registration_early=true;
let runner_age=18;
let raceNumber = Math.floor(Math.random() * 1000);

if(runner_age>18){
    if(registration_early){raceNumber+=1000;}}
    
if(runner_age>18){
    if(registration_early){
        console.log(`you will race at 9.30 am...you're race number is ${raceNumber}` );
    }
    else {
        console.log(`you will race at 11 am...you're race number is ${raceNumber}`);
    }
}
else if(runner_age<18){
    console.log(`you will race at 12.30 am...you're race number is ${raceNumber}`);

}
else{console.log('see the registration disk ');}