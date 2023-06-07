function dayOfTheWeek(number) {
    let week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    if (number < 1 || number > 7) {
        console.log('Invalid day!');
    } else {
        console.log(week[number - 1]);
    }
}