function timeToWalk(steps, footprint, studentSpeedKmH) {

    const distanceInMeters = steps * footprint;
    const speedInMetersPerSecond = studentSpeedKmH * 1000 / 3600;

    const timeWithoutRestInSeconds = distanceInMeters / speedInMetersPerSecond;
    const restingTimeInSeconds = Math.floor(distanceInMeters / 500) * 60; // for every 500m the student makes a 1 min break for resting

    const totalTimeInSeconds = timeWithoutRestInSeconds + restingTimeInSeconds;

    const wholeHours = Math.floor(totalTimeInSeconds / 3600);
    const wholeMinutes = Math.floor((totalTimeInSeconds - wholeHours * 3600) / 60);
    const leftSeconds = Math.ceil(totalTimeInSeconds - (wholeMinutes * 60) - (wholeHours * 3600));

    // console.log(`${wholeHours.toString().padStart(2, '0')}:${wholeMinutes.toString().padStart(2, '0')}:${leftSeconds.toString().padStart(2, '0')}`);
    return `${wholeHours.toString().padStart(2, '0')}:${wholeMinutes.toString().padStart(2, '0')}:${leftSeconds.toString().padStart(2, '0')}`

}
console.log(timeToWalk(2564, 0.70, 5.5));