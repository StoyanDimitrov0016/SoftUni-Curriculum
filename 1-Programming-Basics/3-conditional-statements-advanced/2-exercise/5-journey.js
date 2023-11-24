function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let vacationDestination;
    let vacationPlace;
    let price = 0;
    if (budget <= 100) {
        vacationDestination = "Bulgaria";
        if (season === "summer") {
            vacationPlace = "Camp";
            price = budget * 0.3;
        } else if (season === "winter") {
            vacationPlace = "Hotel";
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        vacationDestination = "Balkans";
        if (season === "summer") {
            vacationPlace = "Camp";
            price = budget * 0.4;
        } else if (season === "winter") {
            vacationPlace = "Hotel";
            price = budget * 0.8;
        }
    } else {
        vacationDestination = "Europe";
        vacationPlace = "Hotel";
        price = budget * 0.9;
    }

    console.log(`Somewhere in ${vacationDestination}`)
    console.log(`${vacationPlace} - ${(price).toFixed(2)}`)
}
journey(["50", "summer"]);