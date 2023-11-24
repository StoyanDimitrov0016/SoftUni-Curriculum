function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishermen = input[2];
    let boatRent = 0;

    switch (season) {
        case "Spring":
            boatRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatRent = 4200;
            break;
        case "Winter":
            boatRent = 2600;
            break;
    }
    //discount options
    if (numberOfFishermen <= 6) {
        boatRent = boatRent * 0.9;
    } else if (numberOfFishermen <= 11) {
        boatRent = boatRent * 0.85;
    } else {
        boatRent = boatRent * 0.75;
    }
    //special discount
    if (numberOfFishermen % 2 == 0 && season != "Autumn") {
        boatRent = boatRent * 0.95;
    }
    if (budget >= boatRent) {
        console.log(`Yes! You have ${(budget-boatRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRent-budget).toFixed(2)} leva.`)
    }
}
boat(["3600","Autumn","6"]);