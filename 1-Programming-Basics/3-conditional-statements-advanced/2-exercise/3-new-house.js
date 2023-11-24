function houseFlowering(input) {
    let flowerType = input[0];
    let flowerCount = input[1];
    let budget = input[2];
    let flowerPrice = 0;
    let sum = 0;

    switch (flowerType) {
        case "Roses":
            flowerPrice = 5;
            break;
        case "Dahlias":
            flowerPrice = 3.80;
            break;
        case "Tulips":
            flowerPrice = 2.80;
            break;
        case "Narcissus":
            flowerPrice = 3;
            break;
        case "Gladiolus":
            flowerPrice = 2.5;
            break;
    }

    sum = flowerCount * flowerPrice;

    if (flowerCount > 80 && flowerType === "Roses") {
        sum = sum * 0.9;
    }
    if (flowerCount > 90 && flowerType === "Dahlias") {
        sum = sum * 0.85;
    }
    if (flowerCount > 80 && flowerType === "Tulips") {
        sum = sum * 0.85;
    }
    if (flowerCount < 120 && flowerType === "Narcissus") {
        sum = sum * 1.15;
    }
    if (flowerCount < 80 && flowerType === "Gladiolus") {
        sum = sum * 1.2;
    }
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }
}
houseFlowering(["Tulips", "88", "260"]);