function openOrClosed(input) {
    let time = Number(input[0])
    let day = input[1];
    let isItSunday = day === "Sunday";
    if (10 <= time && time <= 18 && !isItSunday) {
        console.log("open");
    } else {
        console.log("closed");
    }
}
openOrClosed(["11", "Sunday"]);