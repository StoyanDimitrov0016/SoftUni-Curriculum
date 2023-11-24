function demo(input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);
    let easternBreadCount = Math.ceil(guestsCount / 3);
    let eggsCount = guestsCount * 2;
    let sum = easternBreadCount * 4 + eggsCount * 0.45;
    if (budget >= sum) {
        console.log(`Lyubo bought ${easternBreadCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${(budget - sum).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(sum - budget).toFixed(2)} lv. more.`);
    }
}
demo([10, 35])