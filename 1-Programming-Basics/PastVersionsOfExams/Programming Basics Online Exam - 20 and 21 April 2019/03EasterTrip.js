function demo(input) {
    let destination = input[0];
    let date = input[1];
    let nights = Number(input[2]);
    let pricePerNight = 0;
    if (destination === "France") {
        switch (date) {
            case "21-23": pricePerNight = 30; break;
            case "24-27": pricePerNight = 35; break;
            case "28-31": pricePerNight = 40; break;
        }
    } else if (destination === "Italy") {
        switch (date) {
            case "21-23": pricePerNight = 28; break;
            case "24-27": pricePerNight = 32; break;
            case "28-31": pricePerNight = 39; break;
        }
    } else if (destination === "Germany") {
        switch (date) {
            case "21-23": pricePerNight = 32; break;
            case "24-27": pricePerNight = 37; break;
            case "28-31": pricePerNight = 43; break;
        }
    }
    let sum = nights * pricePerNight;
    console.log(`Easter trip to ${destination} : ${(sum).toFixed(2)} leva.`);
}
demo([]);