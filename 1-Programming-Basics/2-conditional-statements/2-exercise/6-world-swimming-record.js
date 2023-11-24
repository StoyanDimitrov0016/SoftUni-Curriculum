function swim(input){

    let worldRecordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
// every 15 meters the person time is slowing with 12.5 seconds due to water resistance
    let timesSlowing = Math.floor(distanceInMeters/15);
    let totalSlowness = timesSlowing*12.5;
    let totalTime =  secondsPerMeter*distanceInMeters+totalSlowness;

    if (totalTime<worldRecordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime-worldRecordInSec).toFixed(2)} seconds slower.`);
    }
}
swim(["10464","1500","20"]);