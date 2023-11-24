function demo(input) {
    let guestsCount = Number(input[0]);
    let PricePerRerson = Number(input[1]);
    let budget = Number(input[2]);
    let cake = budget * 0.1;
    if (guestsCount >= 10 && guestsCount <= 15) {
        PricePerRerson = PricePerRerson * 0.85;
    } else if (guestsCount >= 16 && guestsCount <= 20) {
        PricePerRerson = PricePerRerson * 0.80;
    } else if (guestsCount > 20) {
        PricePerRerson = PricePerRerson * 0.75;
    }
    let sum = cake + guestsCount * PricePerRerson;
    if (sum <= budget) {
        console.log(`It is party time! ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(sum - budget).toFixed(2)} leva needed.`);
    }
}
demo([18
    , 30
    , 450
]);