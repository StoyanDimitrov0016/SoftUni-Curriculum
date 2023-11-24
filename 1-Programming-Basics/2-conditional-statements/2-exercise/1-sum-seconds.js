function sumSec(input){

let firstTime = Number(input[0]);
let secondTime = Number(input[1]);
let thirdTime = Number(input[2]);

let sumSeconds = firstTime+secondTime+thirdTime;
let minutes = Math.floor(sumSeconds/60);
let seconds = sumSeconds%60;

if (seconds<10) {
    console.log(`${minutes}:0${seconds}`);
} else {
    console.log(`${minutes}:${seconds}`); 
}

}
sumSec(["35","45","44"]);