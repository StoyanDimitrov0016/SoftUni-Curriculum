function onTimeForExam(input) {
    let examHours = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivingHours = Number(input[2]);
    let arrivingMins = Number(input[3]);
    let examTimeInMins = examHours * 60 + examMins;
    let arrivingTimeInMins = arrivingHours * 60 + arrivingMins;
    let differenceMins = examTimeInMins - arrivingTimeInMins;
    let differenceHours = 0;

    if (differenceMins > 59) {
        differenceHours = Math.floor(differenceMins / 60);
        differenceMins = differenceMins % 60;
    }
    if (differenceMins < -59) {
        differenceHours = Math.ceil(differenceMins / 60); // ceil, because in negative numbers it is opposide
        console.log(differenceHours);
        differenceMins = differenceMins % 60;
    }

    if (differenceHours == 0 && differenceMins == 0) {
        console.log(`On time`);

    } else if (differenceHours == 0 && differenceMins > 0) {

        if (differenceMins <= 30) {
            console.log(`On time`);
            console.log(`${differenceMins} minutes before the start`);
        } else {
            console.log(`Early`);
            console.log(`${differenceMins} minutes before the start`);
        }

    } else if (differenceHours > 0 && differenceMins >= 0) {

        if (differenceMins < 10) {
            console.log(`Early`);
            console.log(`${differenceHours}:0${differenceMins} hours before the start`);
        } else {
            console.log(`Early`);
            console.log(`${differenceHours}:${differenceMins} hours before the start`);
        }

    } else if (differenceHours == 0 && differenceMins < 0 && differenceMins >= -59) {
        console.log(`Late`);
        console.log(`${Math.abs(differenceMins)} minutes after the start`);
    } else if (differenceHours < 0) {

        if (0 >= differenceHours && differenceMins > -10) {
            console.log(`Late`);
            console.log(`${Math.abs(differenceHours)}:0${Math.abs(differenceMins)} hours after the start`);
        } else {
            console.log(`Late`);
            console.log(`${Math.abs(differenceHours)}:${Math.abs(differenceMins)} hours after the start`);
        }

    }
}
onTimeForExam(["9", "0", "10", "30"]);