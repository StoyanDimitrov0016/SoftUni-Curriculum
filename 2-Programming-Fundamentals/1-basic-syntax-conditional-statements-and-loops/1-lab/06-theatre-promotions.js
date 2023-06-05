function theatrePromo(dayType, age) {
    let price = 0;
    if (dayType == "Weekday") {
        if (0 <= age && age <= 18) {
            price = 12;
        } else if (18 < age && age <= 64) {
            price = 18;
        } else if (64 < age && age <= 122) {
            price = 12;
        }
    } else if (dayType == "Weekend") {
        if (0 <= age && age <= 18) {
            price = 15;
        } else if (18 < age && age <= 64) {
            price = 20;
        } else if (64 < age && age <= 122) {
            price = 15;
        }
    } else if (dayType == "Holiday") {
        if (0 <= age && age <= 18) {
            price = 5;
        } else if (18 < age && age <= 64) {
            price = 12;
        } else if (64 < age && age <= 122) {
            price = 10;
        }
    }
    if (price > 0) {
        console.log(price + "$");
    } else {
        console.log("Error!");
    }
}