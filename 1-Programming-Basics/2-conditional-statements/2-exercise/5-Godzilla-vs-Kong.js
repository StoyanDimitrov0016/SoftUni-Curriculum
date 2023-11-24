function film(input) {
    let budget = Number(input[0]);
    let participants = Number(input[1]);
    let outfitPrice = Number(input[2]);
    let decor = budget * 0.1;

    if (participants > 150) {
        outfitPrice *= 0.9;
    }

    let neededMoney = decor + outfitPrice * participants;

    let difference = budget - neededMoney;

    if (budget >= neededMoney) {
        console.log(`Action!\nWingard starts filming with ${(budget - neededMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!\nWingard needs ${(neededMoney - budget).toFixed(2)} leva more.`);
    }
}
film(["9587.88", "222", "55.68"]);