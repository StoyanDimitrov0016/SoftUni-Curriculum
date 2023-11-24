function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let review = input[2];
    let nights = days - 1;
    let sum = 0;

    if (roomType === "room for one person") {
        sum = nights * 18;
    } else if (roomType === "apartment") {
        sum = nights * 25;
    } else {
        sum = nights * 35;
    }

    if (days < 10) {
        if (roomType === "apartment") {
            sum = sum * 0.70;
        } else if (roomType === "president apartment") {
            sum = sum * 0.90;
        }
    } else if (days <= 15) {
        if (roomType === "apartment") {
            sum = sum * 0.65;
        } else if (roomType === "president apartment") {
            sum = sum * 0.85;
        }
    } else {
        if (roomType === "apartment") {
            sum = sum * 0.50;
        } else if (roomType === "president apartment") {
            sum = sum * 0.80;
        }
    }
    if (review === "positive") {
        sum = sum * 1.25;
    } else {
        sum = sum * 0.90;
    }
    console.log((sum).toFixed(2));
}
skiTrip(["30", "president apartment", "negative"]);