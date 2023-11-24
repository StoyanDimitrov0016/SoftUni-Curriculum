function summingTime(input){
let hours = Number(input[0]);
let minutes = Number(input[1]);
let wantedTimeInMin = hours*60+minutes+15;
let finalHours = Math.floor(wantedTimeInMin/60);
let finalMinutes = wantedTimeInMin%60;
if (finalHours>23) {
    finalHours=0;
}
if (finalMinutes<10) {
    console.log(`${finalHours}:0${finalMinutes}`);
} else{
    console.log(`${finalHours}:${finalMinutes}`)
}
}
summingTime(["23","45"]);