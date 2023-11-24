function lunchBreak(input) {

    let showName = input[0];
    let showDuration = Number(input[1]);
    let wholeRestDuration = Number(input[2]);

    let lunch = wholeRestDuration / 8;
    let littleRest = wholeRestDuration / 4;
    let freeTime = wholeRestDuration - (lunch + littleRest);

    if (freeTime >= showDuration) {
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(freeTime - showDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(showDuration - freeTime)} more minutes.`);
    }

}
lunchBreak(["Teen Wolf", "48", "60"]);