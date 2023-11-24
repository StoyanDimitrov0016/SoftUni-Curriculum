function outfitChooser(input) {
    let degrees = Number(input[0]);
    let dayPeriod = input[1];
    let outfit;
    let shoes;

    if (10 <= degrees && degrees <= 18) {
        if (dayPeriod === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (dayPeriod === "Afternoon") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayPeriod === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees <= 24) {
        if (dayPeriod === "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayPeriod === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayPeriod === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees > 24) {
        if (dayPeriod === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayPeriod === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (dayPeriod === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
outfitChooser(["16", "Morning"]);